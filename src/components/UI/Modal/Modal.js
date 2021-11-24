import classes from "./Modal.module.css";
import React from "react";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        document.getElementById("overlay")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
