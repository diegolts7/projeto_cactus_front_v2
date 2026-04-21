import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/", whenAuthenticated: "next" },
  { path: "/blog", whenAuthenticated: "next" },
  { path: "/dashboard", whenAuthenticated: "next" },
  { path: "/login", whenAuthenticated: "redirect" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";
const REDIRECT_WHEN_AUTHENTICATED = "/admin";

type TokenPayload = {
  exp: number;
  iat: number;
  sub: string;
};

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const redirectUrl = request.nextUrl.clone();

  const publicRoute = publicRoutes.find((r) => r.path === path);
  const authToken = request.cookies.get("token");

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    try {
      const decoded = jwtDecode<TokenPayload>(authToken.value);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        throw new Error("Token expirado");
      }
    } catch {
      const res = NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, request.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)).*)"],
};
