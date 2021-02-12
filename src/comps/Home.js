import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";

const Home = () => {
  const [selectedImg, setselectedImg] = useState(null);

  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setselectedImg={setselectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setselectedImg={setselectedImg} />
      )}
    </div>
  );
};
export default Home;
