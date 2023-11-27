// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Records",
  },
  {
    icon: UilUsersAlt,
    heading: "Repair Team",
  },
  {
    icon: UilPackage,
    heading: 'Inspection'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    type:"video",
    title: "Potholes Detected",
    color: {
      backGround: "linear-gradient(180deg, #B799FF 0%, #ACBCFF 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Potholes Detected",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    type:"chart",
    title: "Potholes Repaired",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FFEA20 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Potholes Repaired",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {type:"map",
    title: "KM's Covered",
    color: {
      backGround:
        "linear-gradient(#CDE990 -146.42%, #98EECC -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "KM's Covered",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Ramesh Kumar",
    noti: "has repaired pothole at 41 24.2028, 2 10.4418.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Suresh Kumar",
    noti: "has received a task to repair in Sector 34 CHD.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Rajesh ",
    noti: "has repaired pothole at 41 24.2028, 2 10.4418.",
    time: "2 hours ago",
  },
];
