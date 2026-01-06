import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const admin = await prisma.adminUser.findUnique({
            where: { email },
        });

        if (!admin) {
            // For first-run convenience/demo, if NO admins exist, create one?
            // Only do this if table is empty.
            const count = await prisma.adminUser.count();
            if (count === 0) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newAdmin = await prisma.adminUser.create({
                    data: {
                        email,
                        password: hashedPassword,
                        role: "ADMIN",
                        name: "Super Admin"
                    },
                });
                // Login successful after creation
                const sessionData = JSON.stringify({ id: newAdmin.id, role: newAdmin.role, name: newAdmin.name });
                (await cookies()).set("admin_session", sessionData, { httpOnly: true, path: "/" });
                return NextResponse.json({ message: "Admin created and logged in" });
            }

            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isValid = await bcrypt.compare(password, admin.password);
        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Set session cookie with user info
        const sessionData = JSON.stringify({ id: admin.id, role: admin.role, name: admin.name });
        (await cookies()).set("admin_session", sessionData, { httpOnly: true, path: "/" });

        return NextResponse.json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
