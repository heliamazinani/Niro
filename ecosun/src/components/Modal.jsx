// Modal.js
import React from "react";
import { motion } from "framer-motion";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
    >
      <div
        className="mcontainer   "
        
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
    </motion.div>
  );
};

export default Modal;
