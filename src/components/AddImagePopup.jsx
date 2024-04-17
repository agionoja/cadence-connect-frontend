// import { RiImageAddLine } from "react-icons/ri";
// import { MdOutlineAddAPhoto } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import CloseBtn from "./CloseBtn.jsx";
import { useMinScreen } from "../hooks/customHooks.js";
import Modal from "./Modal.jsx";

export default function AddImagePopup() {
  const isMobile = useMinScreen();

  return (
    <div>
      <Modal
        className={
          "rounded-4xl w-[90%] max-w-[27rem] bg-white  px-20 pb-14 pt-20 md:w-full md:pt-[6.5rem]"
        }
      >
        <CloseBtn className={"absolute left-6 top-6 "} />
        <div className={"flex justify-between"}>
          <button className={"add-image-btn"}>
            <CiImageOn size={isMobile ? 40 : 45} />
            <span className={"text-xs md:text-lg"}>Browse files</span>
          </button>
          <button className={"add-image-btn"}>
            <CiCamera size={isMobile ? 40 : 45} />
            <span className={"text-xs md:text-lg"}>Take a photo</span>
          </button>
        </div>
      </Modal>
    </div>
  );
}
