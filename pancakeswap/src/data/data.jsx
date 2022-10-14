import tradeMobileIcon from "../assets/trade_menu_icon_vuota.svg";
import earnMobileIcon from "../assets/earn_menu_icon_vuota.svg";
import winMobileIcon from "../assets/win_menu_icon_vuota.svg";
import nftMobileIcon from "../assets/nft_menu_icon_vuota.svg";
import dotsMobileIcon from "../assets/dots_menu_icon.svg";
import ethLogo from "../assets/ethLogo.png";
import bnbLogo from "../assets/bnbLogo.png";

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
    news: true,
  },
];

export const networkList = [
  { name: "Select a Network", separator: true },
  { name: "Ethereum", logo: ethLogo, value : "eth" },
  { name: "Bnb Smart Chain", logo: bnbLogo, value : "bnb" },
];

export const topFarmsData = [
  {title: "Farms"},
  {
    name: "krs-busd lp",
    perc: 316.690,
    description : "apr"
  },
  {
    name: "hoop-busd lp",
    perc: 225.711,
    description : "apr",
  },
  {
    name: "co-busd lp",
    perc: 220.154,
    description: "apr"
  },
  {
    name: "shell-busd lp",
    perc: 152.406,
    description: "apr"
  },
  {
    name: "trivia-bnb lp",
    perc: 132.663,
    description: "apr"
  },
]

export const topSyrupPoolsData = [
  {title: "Syrup Pools"},
  {
    name: "stake CAKE",
    perc: 61.890,
    description: "apy"
  },
  {
    name: "stake CAKE - earn KRS ",
    perc: 58.707,
    description: "apr"
  },
  {
    name: "stake CAKE - earn ARV",
    perc: 20.526,
    description: "apr"
  },
  {
    name: "stake CAKE - earn MONI",
    perc: 20.103,
    description: "apr"
  },
  {
    name: "stake CAKE - earn SFUND",
    perc: 20.003,
    description: "apr"
  },
]