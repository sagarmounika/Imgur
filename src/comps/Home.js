import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";
const Home = () => {
  const history = useHistory();
  const [selectedImg, setselectedImg] = useState(null);
  useEffect(() => {
    history.push(0);
  }, [history]);

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
