import React from "react";
import { motion } from "framer-motion/dist/es/index";
import { FcFullTrash, FcDownload } from "react-icons/fc";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Modal = ({ selectedImg, setSelectedImg, id, fileName }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const onDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteDoc(doc(db, "images", id));
      setSelectedImg(null);
    }
  };
  const handleDownload = (fileName) => {
    console.log(fileName);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <motion.div
        className="modal-text"
        initial={{ y: "500vh" }}
        animate={{ y: 0 }}
      >
        <FcFullTrash
          className="font-style"
          style={{
            fontSize: "35px",
          }}
          onClick={() => onDelete(id)}
        />
        <FcDownload
          className="font-style"
          style={{
            fontSize: "35px",
          }}
          onClick={() => handleDownload(fileName)}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
