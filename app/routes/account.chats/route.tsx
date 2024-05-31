import { Outlet } from "@remix-run/react";

export default function ChatLayout() {
  return (
    <>
      <div>Chat Layout</div>
      <Outlet />
    </>
  );
}
