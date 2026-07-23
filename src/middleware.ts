import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next internals and files with an extension
  // (so /img, /fonts, /clients, favicon, etc. are served directly).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
