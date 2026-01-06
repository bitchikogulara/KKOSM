import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single article
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const article = await prisma.newsArticle.findUnique({
            where: { id: parseInt(id) },
        });

        if (!article) {
            return NextResponse.json(
                { error: "Article not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(article);
    } catch (error) {
        console.error("Error fetching article:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// UPDATE article
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const article = await prisma.newsArticle.update({
            where: { id: parseInt(id) },
            data: {
                title: body.title,
                description: body.description,
                image: body.image,
                large: body.large ?? false,
                content: body.content,
            },
        });

        return NextResponse.json(article);
    } catch (error) {
        console.error("Error updating article:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// DELETE article
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.newsArticle.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: "Article deleted" });
    } catch (error) {
        console.error("Error deleting article:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
