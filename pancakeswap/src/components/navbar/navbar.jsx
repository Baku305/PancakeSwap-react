import { Button } from "../shared/button/Button";
import titleLogo from "../../assets/title.svg";
import pancakeLogoButton from "../../assets/asset 43.svg";
import { useContext, useEffect, useState } from "react";
import "external-svg-loader";
import verticalMenuIcon from "../../assets/asset 41.svg";
import { VerticalMenu } from "../shared/vericalMenu/VerticaMenu";
import { MyDialog, settingArray } from ".././shared/setting-modal/settingModel";
import { ThemeContext } from "../../App";
import { useWindowDimensions } from "../../custom hooks/useWindowDimensions";
import "external-svg-loader";
import { languageList } from "../../data/data";

const eyesSvg = {
  open: "M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z",
  closed:
    "M75.614 117.896C75 120 65 120 65 120 65 120 56 120 55 118S65 116 65 116C65 116 75 116 75.516 118zM142.288 117.896C142 120 132 120 132 120 132 120 122 120 121.773 117.896S132 116 132 116C132 116 142 116 142.288 117.896z",
};

//transform="translate(-475.57 -282.11)"

export const Navbar = ({ menu }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [eyes, setEyes] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { height, width } = useWindowDimensions();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isOpen]);

  const handleEyesClose = () => {
    setEyes(false);
    setTimeout(() => setEyes(true), 200);
  };

  return (
    <>
      <MyDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        array={settingArray}
      />
      <div
        className={
          scrollPosition < 300
            ? `nav_wrapper nav_wrapper_entry ${theme}-theme`
            : `nav_wrapper nav_wrapper_hidden ${theme}-theme`
        }
      >
        <div className="nav_left_wrapper">
          <div className="logo_wrapper" onMouseEnter={handleEyesClose}>
            <svg
              viewBox="0 0 198 199"
              color="text"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="logo_img"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z"
                fill="#633001"
              />
              <path
                d="M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z"
                fill="#D1884F"
              />
              <path
                d="M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z"
                fill="#FEDC90"
              />
              <path
                class="eye"
                d={eyes ? eyesSvg.open : eyesSvg.closed}
                fill="#633001"
              />
            </svg>
            <svg data-src={titleLogo} alt="title" className="logo_title" />
          </div>
          {width > 620 && (
            <div className="menu_wrapper">
              {menu.map((el, i) => {
                return (
                  <div key={i} className="menu_el_wrapper">
                    {el.name !== "..." ? (
                      <h4>{el.name}</h4>
                    ) : (
                      <svg data-src={el.icon} className="menuIcon" />
                    )}
                    <VerticalMenu icon={verticalMenuIcon} array={el.content} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="nav_right_wrapper">
          {width > 660 || width < 620 ? (
            <div className="pancake_asset_value_wrapper">
              <img
                src={pancakeLogoButton}
                alt=""
                className="pancake_asset_value_wrapper"
              />
              <h4>$4.500</h4>
            </div>
          ) : (
            <div className="pancake_asset_value_wrapper">
              <img
                src={pancakeLogoButton}
                alt=""
                className="pancake_asset_value_wrapper"
              />
            </div>
          )}
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="settings_button"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            className="language_button"
            onMouseEnter={() => setLanguageOpen(true)}
            onMouseLeave={() => setLanguageOpen(true)}
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" />
          </svg>
          {languageOpen && (
            <div className="language_list">
              <VerticalMenu
              onMouseLeave={() => setLanguageOpen(false)}
              onMouseEnter={() => setLanguageOpen(true)} array={languageList} />
            </div>
          )}
          <Button
            color=""
            onClick={() => console.log("ciao")}
            buttonStyle={"btn--connect"}
          >
            {width > 940 ? (
              <span className="ButtonTitle">Connect Wallet</span>
            ) : (
              <span className="ButtonTitle">Connect</span>
            )}
          </Button>
        </div>
      </div>
      {width < 620 && (
        <div className={`mobile_menu_wrapper ${theme}-theme`}>
          {menu.map((el, i) => {
            return (
              <div key={i} className="mobile_menu_el_wrapper">
                <svg data-src={el.icon} className="menuIcon" />
                {el.name !== "..." && <p>{el.name}</p>}
                <VerticalMenu icon={verticalMenuIcon} array={el.content} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
