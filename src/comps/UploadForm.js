import React, { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import { FaRegPlusSquare } from "react-icons/fa";

const UploadForm = ({ file, setFile }) => {
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const onChange = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);

      setError("Please select a valid Image file (PNG or Jpeg)");
    }
  };
  const fileInput = useRef(null);
  return (
    <form>
      <div>
        <FaRegPlusSquare
          className="addFont"
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <input type="file" name="image" ref={fileInput} onChange={onChange} />
      </div>
      <div>
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
