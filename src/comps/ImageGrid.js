import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

const ImageGrid = ({ setselectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <Container>
      <div className="Image-Grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="image-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setselectedImg(doc.url);
              }}
            >
              <motion.img
                src={doc.url}
                alt="Image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              ></motion.img>
            </motion.div>
          ))}
      </div>
    </Container>
  );
};
export default ImageGrid;
