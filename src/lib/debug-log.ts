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
  console.log(
    JSON.stringify({
      ...payload,
      timestamp: Date.now(),
    }),
  );
  // #endregion
}
