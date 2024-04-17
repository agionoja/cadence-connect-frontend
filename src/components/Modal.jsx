import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Modal({ children, className }) {
  return (
    <>
      <div
        style={{ transform: "translate(-50%, -50%" }}
        className={`fixed left-1/2 top-1/3 z-[10000] bg-white shadow-lg  ${className}`}
      >
        {children}
      </div>
      <div
        className={
          "fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-modal backdrop-blur-sm"
        }
      ></div>
    </>
  );
}
