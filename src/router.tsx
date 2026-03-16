import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { debugLog } from "@/lib/debug-log";

export function getRouter() {
  // #region agent log
  debugLog({
    hypothesisId: "B",
    location: "src/router.tsx:getRouter",
    message: "Creating router",
    data: {
      routeCount: Object.keys(routeTree.children ?? {}).length + 1,
      hasIndexRoute: Boolean(routeTree.children?.["/"]),
      defaultPreload: "intent",
    },
  });
  // #endregion

  return createRouter({
    routeTree,
    scrollRestoration: false,
    defaultPreload: "intent",
  });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: Awaited<ReturnType<typeof getRouter>>;
  }
}
