import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const images = await prisma.spotlightImage.findMany({
            orderBy: { order: 'asc' }
        });
        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching spotlight images:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const image = await prisma.spotlightImage.create({
            data: {
                src: body.src,
                order: body.order ?? 0,
            }
        });

        return NextResponse.json(image, { status: 201 });
    } catch (error) {
        console.error("Error creating spotlight image:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
