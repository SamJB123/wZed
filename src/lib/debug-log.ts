type DebugPayload = {
  hypothesisId: string;
  location: string;
  message: string;
  data: Record<string, unknown>;
};

export function debugLog(payload: DebugPayload) {
  if (!import.meta.env.SSR) {
    return;
  }

  // #region agent log
  void import("node:fs")
    .then(({ appendFileSync }) => {
      appendFileSync(
        "/opt/cursor/logs/debug.log",
        JSON.stringify({
          ...payload,
          timestamp: Date.now(),
        }) + "\n",
      );
    })
    .catch(() => {});
  // #endregion
}
