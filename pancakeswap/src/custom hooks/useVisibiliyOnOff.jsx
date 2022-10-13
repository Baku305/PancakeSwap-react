
import { useState,useEffect } from "react";

export function useVisibilityOnOff(info) {

  const [visibility, setVisibility] = useState(info);

  //*visibility fnc
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibility === 1) {
        setVisibility((v)=> v = 2);
      } else if (visibility === 2) {
        setVisibility((v) => v = 1);
      }
    }, 10000);


    return () => clearInterval(interval)

  }, [visibility]);

  return {visibility,setVisibility}
}
