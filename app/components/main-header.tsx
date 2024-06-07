import React, { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import logo from "~/assets/images/logo.png";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileMenu from "~/components/profile-menu";

type props = {
  children: React.ReactNode;
  bgClass?: string;
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Faq", path: "faq" },
];

export default function MainHeader({
  children,
  bgClass = "bg-header-bg",
}: props) {
  const [fakeAuth] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${bgClass} relative flex h-[80vh] w-full flex-col gap-16 bg-cover bg-center bg-no-repeat px-4 text-white md:gap-28 md:px-14 lg:px-28`}
    >
      <div className={"flex items-center justify-between"}>
        <Link to={"/"}>
          <img height={100} width={100} className={""} src={logo} alt="" />
        </Link>

        <div className={"flex items-center gap-8 font-medium"}>
          {/*NAVIGATION*/}
          <nav className={"hidden md:block"}>
            <ul className={"flex gap-4"}>
              {navLinks.map((link) => (
                <li className={"main-nav-item"} key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "bg-red-500" : isActive ? "font-bold" : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/*SIGNING  AND PROFILE MENU*/}
          {!fakeAuth ? (
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
          ) : (
            <ProfileMenu />
          )}

          {/*HAMBURGER MENU*/}
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className={"md:hidden"}
          >
            {isOpen ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />}
          </button>
        </div>
      </div>
      <div className={"flex flex-col justify-center text-center"}>
        {children}
      </div>
    </header>
  );
}
