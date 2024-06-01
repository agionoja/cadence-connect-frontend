import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/routes/_landing/header";

export default function LandingLayout() {
  return (
    <>
      <div className={"min-h-screen w-full"}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
