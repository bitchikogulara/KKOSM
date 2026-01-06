import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protect /admin routes
    if (path.startsWith("/admin")) {
        // Exclude login page from blocking
        if (path === "/admin/login") {
            return NextResponse.next();
        }

        // Check for session cookie
        const adminSession = request.cookies.get("admin_session");

        if (!adminSession) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        try {
            const sessionData = JSON.parse(adminSession.value);
            if (!sessionData || !sessionData.role) {
                throw new Error("Invalid session structure");
            }
        } catch (e) {
            // Invalid session format, force re-login
            const response = NextResponse.redirect(new URL("/admin/login", request.url));
            response.cookies.delete("admin_session");
            return response;
        }
    }

    return NextResponse.next();
}



export const config = {
    matcher: ["/admin/:path*"],
};
