import { NextRequest, NextResponse } from "next/server";
import {
  authMiddleware,
  redirectToLogin,
  redirectToPath,
} from "next-firebase-auth-edge";
import { clientConfig, serverConfig } from "./config";

const PUBLIC_PATH = [
  "/",
  "/login",
  "/register",
  "/auth/login",
  "/auth/register",
];

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
    enableCustomToken: true,
    enableMultipleCookies: true,
    handleInvalidToken: async () => {
      return redirectToLogin(request, {
        path: "/login",
        publicPaths: PUBLIC_PATH,
      });
    },
    handleValidToken: async (_, headers) => {
      if (
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/register"
      ) {
        return redirectToPath(request, "/dashboard", {
          shouldClearSearchParams: true,
        });
      }

      return NextResponse.next({
        request: {
          headers,
        },
      });
    },
  });
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\.).*)", "/api/login", "/api/logout"],
};
