import { Outlet } from "@remix-run/react";

export default function Conversation() {
  return (
    <>
      <h1>This is tht conversation route</h1> <Outlet />
    </>
  );
}
