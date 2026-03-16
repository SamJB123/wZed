import { Suspense, lazy } from "react";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { debugLog } from "@/lib/debug-log";

const WzedApp = lazy(() => import("@/components/WzedApp"));

export const Route = createFileRoute("/")({
  ssr: false,
  component: IndexRoute,
});

function IndexRoute() {
  // #region agent log
  debugLog({
    hypothesisId: "C",
    location: "src/routes/index.tsx:IndexRoute",
    message: "Rendering index route",
    data: {
      hasWindow: typeof window !== "undefined",
      routeSsr: false,
      usesClientOnly: true,
    },
  });
  // #endregion

  return (
    <ClientOnly fallback={<AppBootScreen />}>
      <Suspense fallback={<AppBootScreen />}>
        <WzedApp />
      </Suspense>
    </ClientOnly>
  );
}

function AppBootScreen() {
  // #region agent log
  debugLog({
    hypothesisId: "C",
    location: "src/routes/index.tsx:AppBootScreen",
    message: "Rendering boot fallback",
    data: {
      hasWindow: typeof window !== "undefined",
      fallbackText: "Launching workspace...",
    },
  });
  // #endregion

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg0 text-t2">
      <div className="text-center">
        <div className="text-sm font-medium text-t1">wZed</div>
        <div className="mt-2 text-xs text-t4">Launching workspace...</div>
      </div>
    </div>
  );
}
