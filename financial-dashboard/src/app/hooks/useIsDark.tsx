// src/app/hooks/useIsDark.tsx
import { useEffect, useState } from "react";

export default function useIsDark() {
  const [isDark, setIsDark] = useState<boolean>(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    // observe class attribute changes so manual toggles reflect immediately
    const mo = new MutationObserver(() => setIsDark(el.classList.contains("dark")));
    mo.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return isDark;
}
