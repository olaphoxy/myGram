import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion/dist/es/index";
const ImageGrid = ({ setSelectedImg, handleId }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              setSelectedImg(doc.url);
              handleId(doc.id);
            }}
          >
            <motion.img
              src={doc.url}
              alt="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
