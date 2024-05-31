import { useLocation } from "@remix-run/react";

export default function useIncludePathname(pathNames: string[]) {
  const location = useLocation();
  console.log(location.pathname); // Debugging: Check the current path

  return pathNames.some((pathName) =>
    location.pathname.toLowerCase().includes(pathName.toLowerCase()),
  );
}
