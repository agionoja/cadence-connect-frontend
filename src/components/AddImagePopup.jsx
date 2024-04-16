import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import CloseBtn from "./CloseBtn.jsx";
import { useSmallScreen } from "../hooks/useSmallScreen.js";

export default function AddImagePopup() {
  const isMobile = useSmallScreen();

  return (
    <div
      className={
        "rounded-4xl relative mx-auto  mt-20 w-full bg-white px-20 pb-14 pt-28 shadow-2xl md:max-w-[25rem]"
      }
    >
      <CloseBtn className={"absolute left-6 top-6 "} />
      <div className={"flex justify-between"}>
        <button>
          <CiImageOn size={isMobile ? 30 : 40} />
        </button>
        <button>
          <CiCamera size={isMobile ? 30 : 40} />
        </button>
      </div>
    </div>
  );
}
