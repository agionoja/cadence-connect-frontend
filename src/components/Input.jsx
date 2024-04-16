import PropTypes from "prop-types";
import { calWidth } from "../utils/utils.js";

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
};

export default function Input({
  type = "text",
  placeholder = "Change Me!",
  width = "100%",
  onChange,
  onBlur,
  onFocus,
  className,
  value,
  label = "Change Me!",
}) {
  const inputWidth = calWidth(width);

  return (
    <div
      style={{ width: type === "checkbox" ? "fit-content" : inputWidth }}
      className={`${type === "checkbox" ? `w-fit flex-row-reverse items-center` : "flex-col"} relative flex   gap-2 md:gap-3`}
    >
      <label className={"text-xl font-medium text-black"}>{label}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`${type === "checkbox" ? "absolute, left-0 w-fit" : "static mx-auto w-full  rounded-sm border-2 border-gray p-3 text-[1rem]  outline-none md:p-4 md:text-lg"}  ${className}`}
      />
    </div>
  );
}
