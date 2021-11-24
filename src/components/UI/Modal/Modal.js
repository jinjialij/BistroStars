import classes from "./Modal.module.css";
import React from "react";
import reactDom from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
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
      {reactDom.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
