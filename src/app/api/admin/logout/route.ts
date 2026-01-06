import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    (await cookies()).delete("admin_session");
    return NextResponse.json({ message: "Logged out" });
}

export async function GET() {
    (await cookies()).delete("admin_session");
    return NextResponse.json({ message: "Logged out" });
}
