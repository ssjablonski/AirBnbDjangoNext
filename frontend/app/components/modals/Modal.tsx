"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  label: string;
  close: () => void;
  content: React.ReactElement;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ label, content, isOpen, close }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(true);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
        <div
          className={`translate duration-600 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "trnaslate-y-full opacity-10"
          }`}
        >
          <div className="w-full h-auto rounded-xl realtive flex flex-col bg-white">
            <header className="flex items-center p-4 rounded-t justify-center relative border-b">
              <div
                onClick={handleClose}
                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
              >
                <FontAwesomeIcon icon={faClose} />
              </div>
              <h2 className="text-lg font-bold">{label}</h2>
            </header>
            <section className="p-6">{content}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
