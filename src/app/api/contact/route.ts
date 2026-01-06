import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, message } = body;

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const submission = await prisma.contactSubmission.create({
            data: {
                firstName,
                lastName,
                email,
                phone: phone || "",
                message,
            },
        });

        return NextResponse.json(
            { message: "Submission received", data: submission },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating contact submission:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
