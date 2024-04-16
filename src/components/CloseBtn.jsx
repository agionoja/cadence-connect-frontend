import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { useSmallScreen } from "../hooks/useSmallScreen.js";

CloseBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default function CloseBtn({ onClick, className }) {
  const isMobile = useSmallScreen();

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full bg-black p-2 md:p-3 ${className}`}
    >
      <IoMdClose size={isMobile ? 15 : 20} color={"#ffffff"} />
    </button>
  );
}
