import React, { useState } from "react";
import { withStore } from "../Store";
import ReactFileReader from "react-file-reader";
import { ComponentBox, Button, Text } from "../../components/SharedStyles";

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
      store.set("fr_fileName", reader.fileName);
      store.set("fr_file", reader.result);
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
      <Text>
        Selected File: <strong>{fileName}</strong>
      </Text>
    </ComponentBox>
  );
}

export default withStore(GetFile);
