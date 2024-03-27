import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

const Modal = forwardRef(function Modal({ setError }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className=" backdrop:bg-sky-700/80">
      <form className=" bg-gray-300 p-5 rounded-md">
        <p className=" text-3xl font-bold">Oops! An Error Occured</p>
        <p className=" text-xl font-semibold">Please fill all text feilds.</p>
        <div className=" mt-10">
          <Button onClick={() => setError(false)}>Close</Button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
