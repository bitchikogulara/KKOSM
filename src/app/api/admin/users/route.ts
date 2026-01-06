import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

// Helper to check isAdmin
async function isAdmin() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) return false;
    try {
        const data = JSON.parse(session.value);
        return data.role === "ADMIN";
    } catch {
        return false;
    }
}

export async function GET() {
    if (!await isAdmin()) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const users = await prisma.adminUser.findMany({
            select: { id: true, email: true, name: true, role: true, createdAt: true }
        });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    if (!await isAdmin()) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { email, password, name, role } = body;

        if (!email || !password || !role) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const existing = await prisma.adminUser.findUnique({ where: { email } });
        if (existing) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.adminUser.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role
            }
        });

        return NextResponse.json({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}
