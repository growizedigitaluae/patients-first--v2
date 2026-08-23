import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Optimistic gate for the Member Portal (Next.js 16 "proxy", formerly
 * middleware). It only checks for the presence of a session cookie so
 * visitors land on the sign-in page quickly.
 *
 * This is intentionally NOT the security boundary: every protected page and
 * API call re-verifies the session and membership server-side.
 */
const PUBLIC_MEMBER_PATHS = [
  "/member/login",
  "/member/forgot-password",
  "/member/reset-password",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = request.cookies.has("payload-token");

  const isPublicPath = PUBLIC_MEMBER_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  // Visitors without a session are sent to the sign-in page.
  if (!hasSession && !isPublicPath) {
    const loginUrl = new URL("/member/login", request.url);
    if (!pathname.startsWith("/member/login")) {
      loginUrl.searchParams.set("next", pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  // Already signed in — skip the sign-in page.
  if (hasSession && pathname === "/member/login") {
    return NextResponse.redirect(new URL("/member/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/member", "/member/:path*"],
};
