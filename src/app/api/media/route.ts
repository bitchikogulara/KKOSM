import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, type, title } = body;

        const media = await prisma.mediaItem.create({
            data: {
                url,
                type,
                title,
            },
        });

        return NextResponse.json(media);
    } catch (error) {
        console.error("Error creating media item:", error);
        return NextResponse.json(
            { error: "Error creating media item" },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");
        const limit = searchParams.get("limit");

        const where = type ? { type } : {};

        const media = await prisma.mediaItem.findMany({
            where,
            orderBy: {
                createdAt: "desc",
            },
            take: limit ? parseInt(limit) : undefined,
        });

        return NextResponse.json(media);
    } catch (error) {
        console.error("Error fetching media:", error);
        return NextResponse.json(
            { error: "Error fetching media" },
            { status: 500 }
        );
    }
}
