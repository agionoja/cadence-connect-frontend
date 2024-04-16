import PropTypes from "prop-types";
import { calWidth } from "../utils/utils.js";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function Button({
  text = "Change Me!",
  onClick,
  width = "100%",
}) {
  const btnWidth = calWidth(width);

  return (
    <button
      style={{ width: btnWidth }}
      onClick={onClick}
      className={`flex items-center justify-center rounded-sm bg-black p-3 text-[1rem] font-medium leading-normal text-white md:p-4 md:text-[1.25rem]`}
    >
      {text}
    </button>
  );
}
