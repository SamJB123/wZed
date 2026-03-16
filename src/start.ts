import { createMiddleware, createStart } from "@tanstack/react-start";

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
  defaultSsr: false,
  requestMiddleware: [crossOriginIsolationMiddleware],
}));
