"use client";

import { useAppContext } from "@/context/context";

export default function ThemeProviderWrapper({ children }) {
  const { theme } = useAppContext();

  return (
    <div className={theme === "dark" ? "scheme-dark" : "scheme-light"}>
      {children}
    </div>
  );
}
