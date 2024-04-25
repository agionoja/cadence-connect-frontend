import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CloseBtn from "./CloseBtn.jsx";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ children, className, onClose, open }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Match this timeout with your CSS transition duration
  };

  if (!open) return;

  return (
    <>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
        }}
        className={`fixed left-1/2 top-1/3 z-[10000] -translate-x-1/2 -translate-y-1/3 transform bg-white shadow-lg ${isVisible ? "scale-100" : "scale-95"} ${className}`}
      >
        <CloseBtn onClick={handleClose} className={"absolute left-6 top-6 "} />
        {children}
      </div>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
        }}
        className={`fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-modal backdrop-blur-sm ${isVisible ? "" : "pointer-events-none"}`}
      ></div>
    </>
  );
}
