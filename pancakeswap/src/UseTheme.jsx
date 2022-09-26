import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, updateTheme];
}