import React, { useState, useEffect } from "react";
import { withStore } from "./Store";
import ReactFileReader from "react-file-reader";
import { ComponentBox } from "../components/SharedStyles";

function GetFile({ store }) {
  const [fileName, setFileName] = useState("");

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      //   alert(reader.result);
      //   alert(reader.fileName);
      setFileName(reader.fileName);
      store.set("file", reader.result);
    };
    reader.fileName = files[0].name;
    reader.readAsText(files[0]);
  };

  return (
    <ComponentBox>
      <p>Please select a csv/tsv file to process</p>
      <div>Selected File Name:</div>
      <div>{fileName}</div>
      <ReactFileReader handleFiles={handleFiles} fileTypes={[".tsv", ".csv"]}>
        <button className="btn">Upload</button>
      </ReactFileReader>
    </ComponentBox>
  );
}

export default withStore(GetFile);
// export default GetFile;
