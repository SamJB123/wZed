import { createMiddleware, createStart } from "@tanstack/react-start";
import { debugLog } from "@/lib/debug-log";

const crossOriginIsolationMiddleware = createMiddleware({
  type: "request",
}).server(async ({ next }) => {
  const result = await next();

  result.response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  result.response.headers.set(
    "Cross-Origin-Embedder-Policy",
    "credentialless",
  );

  return result;
});

export const startInstance = createStart(() => ({
  // #region agent log
  ...(() => {
    debugLog({
      hypothesisId: "A",
      location: "src/start.ts:createStart",
      message: "Resolving start options",
      data: {
        defaultSsr: true,
        requestMiddlewareCount: 1,
      },
    });
    return {};
  })(),
  // #endregion
  defaultSsr: true,
  requestMiddleware: [crossOriginIsolationMiddleware],
}));
