import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    if (!await isAdmin()) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = await params;
        const userId = parseInt(id);

        // Prevent self-deletion if wanted, though not strictly required if other admins exist.
        // But preventing deleting the LAST admin is good practice, currently simpler to just allow.

        await prisma.adminUser.delete({
            where: { id: userId }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}
