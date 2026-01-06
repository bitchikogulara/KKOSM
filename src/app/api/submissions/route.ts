import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const contacts = await prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' }
        });

        const registrations = await prisma.scoutRegistration.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({
            contacts,
            registrations
        });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
