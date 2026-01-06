import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const event = await prisma.event.findUnique({
            where: { id: parseInt(id) },
        });

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        return NextResponse.json(event);
    } catch (error) {
        console.error("Error fetching event:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const updatedEvent = await prisma.event.update({
            where: { id: parseInt(id) },
            data: {
                tag: body.tag,
                date: body.date,
                title: body.title,
                description: body.description,
                location: body.location,
                age: body.age,
                price: body.price,
                image: body.image,
                theme: body.theme,
                category: body.category,
                specialDescription: body.specialDescription,
                timeline: body.timeline ?? [],
                sections: body.sections ?? [],
            },
        });

        return NextResponse.json(updatedEvent);
    } catch (error) {
        console.error("Error updating event:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await prisma.event.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error("Error deleting event:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
