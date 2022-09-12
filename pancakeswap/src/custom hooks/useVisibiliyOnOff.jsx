
import { useState,useEffect } from "react";

export function useVisibilityOnOf(info) {

  const [visibility, setVisibility] = useState(info);

  //*visibility fnc
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibility === "none") {
        setVisibility((v) => (v = "flex"));
      } else {
        setVisibility((v) => (v = "none"));
      }
      return clearInterval(interval);
    }, 5000);
  }, [visibility]);

  return visibility
}
