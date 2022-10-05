import tradeMobileIcon from "../assets/trade_menu_icon_vuota.svg";
import earnMobileIcon from "../assets/earn_menu_icon_vuota.svg";
import winMobileIcon from "../assets/win_menu_icon_vuota.svg";
import nftMobileIcon from "../assets/nft_menu_icon_vuota.svg";
import dotsMobileIcon from "../assets/dots_menu_icon.svg";


export const languageList = [
  { name: "English" },
  { name: "Italiano" },
  { name: "Deutsch" },
  { name: "Espanol" },
  { name: "Romano" },
  { name: "Napoletano" },
  { name: "Milanse" },
  { name: "Bolognese" },
];

export const menu = [
  {
    name: "trade",
    content: [
      { name: "Swap" },
      { name: "Limit" },
      { name: "Liquidity" },
      { name: "Perpetual", icon: true },
      { name: "Bridge", icon: true },
    ],
    icon: tradeMobileIcon,
  },
  {
    name: "earn",
    content: [{ name: "Farms" }, { name: "Pools" }],
    icon: earnMobileIcon,
  },
  {
    name: "win",
    content: [
      { name: "Trading competition" },
      { name: "Prediction (Beta)" },
      { name: "Lottery" },
      { name: "Pottery" },
    ],
    icon: winMobileIcon,
    
  },
  {
    name: "nft",
    content: [
      { name: "Overview" },
      { name: "Collections" },
      { name: "Activity" },
    ],
    icon: nftMobileIcon,
  },
  {
    name: "...",
    content: [
      { name: "Info" },
      { name: "IFO" },
      { name: "Voting", separator: true, news: "vote now" },
      { name: "Leaderboard", separator: true },
      { name: "Blog", icon: true },
      { name: "Docs", icon: true },
    ],
    icon: dotsMobileIcon,
    news : true
  },
];
