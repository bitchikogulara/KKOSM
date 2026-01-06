import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get("skip") || "0");
    const take = parseInt(searchParams.get("take") || "6");

    try {
        const news = await prisma.newsArticle.findMany({
            skip,
            take,
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(news);
    } catch (error) {
        console.error("Error fetching news:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const article = await prisma.newsArticle.create({
            data: {
                title: body.title,
                description: body.description,
                image: body.image,
                large: body.large ?? false,
                content: body.content,
            }
        });

        return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error("Error creating news article:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
