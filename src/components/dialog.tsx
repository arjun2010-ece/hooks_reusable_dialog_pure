import React, { useEffect, useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.hasAttribute("open")) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog ref={dialogRef}>
      <form>
        <input type="text" />
        <button onClick={handleClose} data-close-modal>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
};

export default Dialog;
