import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (!session) return null;
    try {
        return JSON.parse(session.value);
    } catch {
        return null;
    }
}

export async function GET() {
    const session = await getSession();
    if (!session || !session.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const user = await prisma.adminUser.findUnique({
            where: { id: session.id },
            select: { id: true, email: true, name: true, role: true }
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getSession();
    if (!session || !session.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { email, password, name } = body;

        const data: any = {};
        if (email) data.email = email;
        if (name) data.name = name;
        if (password && password.length > 0) {
            data.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.adminUser.update({
            where: { id: session.id },
            data,
            select: { id: true, email: true, name: true, role: true }
        });

        // Update cookie with new details
        const newSessionData = JSON.stringify({
            id: updatedUser.id,
            role: updatedUser.role,
            name: updatedUser.name
        });
        (await cookies()).set("admin_session", newSessionData, { httpOnly: true, path: "/" });

        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}
