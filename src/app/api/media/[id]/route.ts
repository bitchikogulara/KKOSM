import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.mediaItem.delete({
            where: {
                id: parseInt(id),
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting media item:", error);
        return NextResponse.json(
            { error: "Error deleting media item" },
            { status: 500 }
        );
    }
}
