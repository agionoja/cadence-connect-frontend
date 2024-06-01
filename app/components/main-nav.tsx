import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

export default function MainNav() {
  const [tempAuth] = useState(true);

  return (
    <nav className={"flex font-bold text-white"}>
      <ul className={"flex"}>
        <li className={"main-nav-item"}>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className={"main-nav-item"}>
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li className={"main-nav-item"}>
          <NavLink to={"faq"}>Faq</NavLink>
        </li>
      </ul>
      <ul className={"flex"}>
        <li className={"main-nav-item"}>
          <Link to={"/sign-in"}>Sign in</Link>
        </li>
        <li className="main-nav-item">|</li>
        <li className={"main-nav-item"}>
          <Link to={"/sign-options"}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
