import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const events = await prisma.event.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // In a real app, verify Admin session here.

        const event = await prisma.event.create({
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
            }
        });

        return NextResponse.json(event, { status: 201 });
    } catch (error) {
        console.error("Error creating event:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
