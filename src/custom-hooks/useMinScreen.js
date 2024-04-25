import { useEffect, useState } from "react";

export default function useMinScreen(minScreen) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= minScreen || window.innerWidth <= 500,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= minScreen || window.innerWidth <= 500);
      // console.log("handleResize function is triggered");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minScreen]);

  return isMobile;
}
