import { Outlet } from "@remix-run/react";
import Header from "~/components/header";

export default function LandingLayout() {
  return (
    <>
      <div className={"min-h-screen w-full"}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}
