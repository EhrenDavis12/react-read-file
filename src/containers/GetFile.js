import React, { useState } from "react";
import { withStore } from "./Store";
import ReactFileReader from "react-file-reader";
import { ComponentBox, Button } from "../components/SharedStyles";

/*
Use this to Get the File from the user. 
Will render full card
Places file content into the Store
*/
function GetFile({ store }) {
  const [fileName, setFileName] = useState("");

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      setFileName(reader.fileName);
      store.set("file", reader.result);
    };
    reader.fileName = files[0].name;
    reader.readAsText(files[0]);
  };

  return (
    <ComponentBox>
      <p>Please select a csv/tsv file to process</p>
      <ReactFileReader handleFiles={handleFiles} fileTypes={[".tsv", ".csv"]}>
        <Button className="btn">Upload File</Button>
      </ReactFileReader>
      <br />
      <div>
        Selected File: <strong>{fileName}</strong>
      </div>
    </ComponentBox>
  );
}

export default withStore(GetFile);
