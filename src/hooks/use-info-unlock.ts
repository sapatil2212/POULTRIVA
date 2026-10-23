import { useCallback, useSyncExternalStore } from "react";

const KEY = "poultriva_info_unlocked";
const EVENT = "poultriva-info-unlock";

function subscribe(onChange: () => void) {
  const handler = () => onChange();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

// Locked on the server and first client render to keep hydration consistent.
const getServerSnapshot = () => false;

/**
 * Session/visitor-wide unlock for gated product information.
 * Once a visitor submits the info form on any product, all gated
 * sections stay unlocked for subsequent visits in this browser.
 */
export function useInfoUnlock(): [boolean, () => void] {
  const unlocked = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const unlock = useCallback(() => {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      /* ignore storage errors */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return [unlocked, unlock];
}
