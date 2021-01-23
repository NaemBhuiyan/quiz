import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
const ToastNotice = ({ message, show, setShow }) => {
  const toggle = () => setShow(!show);

  return (
    <Toast isOpen={show} className="fixed-bottom mb-4 ml-5">
      <ToastHeader icon="danger" toggle={toggle}>
        Notice
      </ToastHeader>
      <ToastBody>{message}</ToastBody>
    </Toast>
  );
};

export default ToastNotice;
