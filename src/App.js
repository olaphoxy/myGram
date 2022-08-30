import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
// import ProgressBar from "./ProgressBar";
import UploadForm from "./comps/UploadForm";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [id, setId] = useState(null);
  const [file, setFile] = useState(null);
  // console.log(file);

  return (
    <div className="App">
      <Title />
      <UploadForm file={file} setFile={setFile} />

      <ImageGrid setSelectedImg={setSelectedImg} handleId={setId} />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          id={id}
        />
      )}
    </div>
  );
}

export default App;
