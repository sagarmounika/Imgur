import React from 'react';
import {motion} from 'framer-motion';

const Modal =({ selectedImg,setselectedImg })=>{
  const handleModal=(e)=>{
    if(e.target.classList.contains("Modal")){
      setselectedImg(null);
    }
  }
  return(
    <motion.div className="Modal" onClick={handleModal}
    initial={{opacity:0}}
    animate={{opacity:1 }}>
      <img src= {selectedImg} alt="modal" />
    </motion.div>
  )
}
export default Modal;