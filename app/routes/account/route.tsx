import { Outlet } from "@remix-run/react";

export default function AccountLayout() {
  return (
    <>
      <div>This is the Account Layout Route</div>
      <Outlet />
    </>
  );
}
