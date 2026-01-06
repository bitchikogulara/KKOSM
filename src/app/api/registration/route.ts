import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            dobDay,
            dobMonth,
            dobYear,
            source,
            motivation,
        } = body;

        // Basic validation
        if (!firstName || !lastName || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const registration = await prisma.scoutRegistration.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                dobDay: dobDay ? parseInt(dobDay) : null,
                dobMonth: dobMonth ? parseInt(dobMonth) : null,
                dobYear: dobYear ? parseInt(dobYear) : null,
                source: source || "",
                motivation: motivation || "",
            },
        });

        return NextResponse.json(
            { message: "Registration successful", data: registration },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating registration:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
