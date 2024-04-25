import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import useMinScreen from "../custom-hooks/useMinScreen.js";
import Modal from "./Modal.jsx";
import PropTypes from "prop-types";

AddImagePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function AddImagePopup({ onClose, isOpen }) {
  const isMobile = useMinScreen();

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        closeBtnPosition={"absolute left-6 top-6"}
        className={
          "w-[90%] max-w-[27rem] rounded-4xl bg-white  px-20 pb-14 pt-20 md:w-full md:pt-[6.5rem]"
        }
      >
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
