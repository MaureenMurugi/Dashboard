//Sidebar imports

import { 
    UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
 
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
      },
      {
        icon: UilUsersAlt,
        heading: "Customers",
      },
      {
        icon: UilPackage,
        heading: 'Products'
      },
      {
        icon: UilChart,
        heading: 'Analytics'
      },
];

export const CardsData = [
  {
    title: "Fare",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Fare",
        data: [31,40,28,51,42,109,100],
      },
    ],
  },
  {
    title: "Buses",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Buses",
        data: [31,40,28,51,42,109,100],
      },
    ],
  },
  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    value: "25,970",
    png: UilClipboardAlt,
    series: [
      {
        name: "Users",
        data: [31,40,28,51,42,109,100],
      },
    ],
  },

];