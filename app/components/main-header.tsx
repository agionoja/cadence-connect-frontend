import React, { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import logo from "~/assets/images/logo.png";
// import { FaNode } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

type props = {
  children: React.ReactNode;
  bgClass?: string;
};

function activeNavLink({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return isPending ? "bg-red-500" : isActive ? "font-bold" : "";
}

export default function MainHeader({
  children,
  bgClass = "bg-header-bg",
}: props) {
  const [fakeAuth] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`relative h-[80vh] w-full ${bgClass} flex flex-col gap-16 bg-cover bg-center bg-no-repeat px-4 text-white md:gap-28 md:px-14 lg:px-28`}
    >
      <div className={"flex items-center justify-between"}>
        <Link to={"/"}>
          <img height={100} width={100} className={""} src={logo} alt="" />
          {/*<FaNode color={"#fff"} size={100} />*/}
        </Link>

        {/*TOGGLE MENU*/}
        <div className={"absolute right-4 flex gap-10"}>
          <button className={""}>
            <CgProfile size={30} />
          </button>
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className={"md:hidden"}
          >
            {isOpen ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />}
          </button>
        </div>

        {/*NAVIGATION*/}
        <div className={"flex gap-8 font-medium"}>
          <nav className={"hidden md:block"}>
            <ul className={"flex gap-4"}>
              <li className={"main-nav-item"}>
                <NavLink className={activeNavLink} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className={"main-nav-item"}>
                <NavLink className={activeNavLink} to={"about"}>
                  About
                </NavLink>
              </li>
              <li className={"main-nav-item"}>
                <NavLink className={activeNavLink} to={"faq"}>
                  Faq
                </NavLink>
              </li>
            </ul>
          </nav>

          {/*SIGNING*/}
          {!fakeAuth && (
            <ul
              className={
                "absolute bottom-[20%] left-0 right-0 flex items-center justify-center gap-2 md:static"
              }
            >
              <li className={"main-nav-item"}>
                <Link to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="">|</li>
              <li
                className={
                  "main-nav-item rounded-sm bg-white font-bold text-black"
                }
              >
                <Link to={"/sign-options"}>Sign up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className={"flex flex-col justify-center text-center"}>
        {children}
      </div>
    </header>
  );
}
