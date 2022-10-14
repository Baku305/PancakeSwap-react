import { useState } from "react";
import { topFarmsData } from "../../data/data";
import { topSyrupPoolsData } from "../../data/data";
import changeIcon from "../../assets/asset 54.svg"
import { useEffect } from "react";

export const TopEarnTabs = ({data1, data2}) => {
  const [data, setData] = useState(1);
  const [out,setOut] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      if (data === 1) {
            setOut(true)
            setTimeout(()=>setOut(false),500)
          setData((v)=> v = 2);
      } else if (data === 2) {
        setOut(true)
        setTimeout(()=>setOut(false),500)
          setData((v) => v = 1);
      }
    }, 5000);

    
    return () => clearInterval(interval)
    
}, [data]);

const handleData = () =>{
    if (data === 1) {
        setOut(true)
        setTimeout(()=>setOut(false),500)
      return setData((v)=> v = 2);
  } else if (data === 2) {
    setOut(true)
    setTimeout(()=>setOut(false),500)
      return setData((v) => v = 1);
  }
}

  return data === 1 ? (
    <div className="tab_wrapper_full">
    <div className="tab_wrapper">
      <div className="tab_title">
        <h3>Top</h3>
        <h3 className="title_colored">{data1[0].title}</h3>
        <div onClick={handleData}>
        <svg className= "change_icon" data-src={changeIcon}></svg>
        </div>
      </div>
      <div className={!out ? `tab_el_wrapper` : `tab_el_wrapper tab_out`}>
        {data1.map((el, i) => {
          return (
            i > 0 && (
              <div className="tab_el_content">
                <div className="tab_el_name">{el.name.toUpperCase()}</div>
                <div className="tab_el_perc">{el.perc}%</div>
                <div className="tab_el_decription">
                  {el.description.toUpperCase()}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
    </div>
  ) : (
    <div className="tab_wrapper_full">
    <div className="tab_wrapper">
      <div className="tab_title">
        <h3>Top</h3>
        <h3 className="title_colored">{data2[0].title}</h3>
        <svg className= "change_icon" data-src={changeIcon}></svg>
      </div>
      <div className="tab_el_wrapper">
        {data2.map((el, i) => {
          return (
            i > 0 && (
              <div className="tab_el_content">
                <div className="tab_el_name">{el.name.toUpperCase()}</div>
                <div className="tab_el_perc">{el.perc}%</div>
                <div className="tab_el_decription">
                  {el.description.toUpperCase()}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
    </div>
  );
};
