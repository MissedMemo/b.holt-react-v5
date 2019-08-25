import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const ref = useRef(null);

  if (!ref.current) {
    const div = document.createElement("div");
    ref.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(ref.current);

    return () => modalRoot.removeChild(ref.current);
  }, []);

  return createPortal(<div>{children}</div>, ref.current);
};

export default Modal;
