import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { useMinScreen } from "../hooks/customHooks.js";

CloseBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default function CloseBtn({ onClick, className }) {
  const isMobile = useMinScreen(400);

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full bg-black p-2 md:p-3 ${className}`}
    >
      <IoMdClose size={isMobile ? 15 : 20} color={"#ffffff"} />
    </button>
  );
}
