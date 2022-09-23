import { useState } from "react";

export const Checkbox = () => {

  const [checked, setChecked] = useState(false);

  return (
   <div className="switch">
      <input
        checked={checked}
        type="checkbox"
        className={checked ? "switchInput checked" : "switchInput"}
      ></input>
     <div className="slider" onClick={()=> setChecked(!checked)}></div>
    </div>
  );
};
