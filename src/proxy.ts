import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/login",
  "/onboarding",
  "/auth/success",
  "/auth/withdraw",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic =
    PUBLIC_PATHS.some((p) => pathname.startsWith(p)) ||
    /^\/album\/\d+$/.test(pathname);

  // onboarding 체크
  if (pathname === "/" && !request.cookies.has("onboarding")) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  // 인증 체크
  if (!isPublic && !request.cookies.has("refreshToken")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
