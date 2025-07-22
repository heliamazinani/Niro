// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="mcontainer  wow fadeIn"
      data-wow-delay=".3s"
      onClick={onClose}
      style={{
        position: "fixed",

        top: "100px",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999999999999,
      }}
    >
      <div
        className="m-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: "30px",
          borderRadius: "10px",
          maxHeight: "80vh",
          overflowY: "auto",
          width: "90%",
          maxWidth: "700px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            float: "left",
            color: "grey",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          ✕
        </button>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Modal;
