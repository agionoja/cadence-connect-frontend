import { Outlet } from "react-router-dom";
import AccountHeader from "../../components/user-nav/AccountHeader.jsx";
import AccountNav from "../../components/user-nav/AccountNav.jsx";

export default function AccountBox() {
  return (
    <div className={"h-screen min-h-screen px-4 pt-6 md:px-28 md:py-10"}>
      <AccountHeader>
        <AccountNav />
      </AccountHeader>

      <Outlet />
    </div>
  );
}
