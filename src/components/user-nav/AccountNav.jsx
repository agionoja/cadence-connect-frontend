import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import homeIcon from "../../assets/icons/home-icon.svg";
import chatIconBlack from "../../assets/icons/chat-icon.svg";
import chatIconWhite from "../../assets/icons/chat-icon-white.svg";
import supportIconBlack from "../../assets/icons/support-icon.svg";
import supportIconWhite from "../../assets/icons/support-icon-black.svg";
import settingIconBlack from "../../assets/icons/setting-icon.svg";
import settingsIconWhite from "../../assets/icons/setting-icon-black.svg";
import notificationIconBlack from "../../assets/icons/notification-con.svg";
import notificationIconWhite from "../../assets/icons/notification-icon-black.svg";

// Function to preload images
const preloadImages = () => {
  const images = [
    homeIcon,
    chatIconBlack,
    chatIconWhite,
    supportIconBlack,
    supportIconWhite,
    settingIconBlack,
    settingsIconWhite,
    notificationIconBlack,
    notificationIconWhite,
  ];
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

export default function AccountNav() {
  const location = useLocation().pathname.split("/");
  const path = location[location.length - 1];

  // Preload images on component mount
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <nav className={"w-full"}>
      <ul className={"flex justify-between md:flex-col md:gap-0"}>
        <li>
          <NavLink to={"/"} className={"nav-link"}>
            <img src={homeIcon} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"chat"}
            className={({ isActive }) =>
              isActive ? "nav-link bg-black" : "nav-link"
            }
          >
            <img src={path === "chat" ? chatIconWhite : chatIconBlack} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"notifications"}
            className={({ isActive }) =>
              isActive ? "nav-link bg-black" : "nav-link"
            }
          >
            <img
              src={
                path === "notifications"
                  ? notificationIconWhite
                  : notificationIconBlack
              }
              alt=""
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"support"}
            className={({ isActive }) =>
              isActive ? "nav-link bg-black" : "nav-link"
            }
          >
            <img
              src={path === "support" ? supportIconWhite : supportIconBlack}
              alt=""
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"settings"}
            className={({ isActive }) =>
              isActive ? "nav-link bg-black" : "nav-link"
            }
          >
            <img
              src={path === "settings" ? settingsIconWhite : settingIconBlack}
              alt=""
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
