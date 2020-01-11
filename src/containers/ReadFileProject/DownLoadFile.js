import React from "react";
import { Button } from "../../components/SharedStyles";

/*
Will render button component
Taking in Text it will allow the user to download it as a file. 
*/
function DownLoadFile({ contentText }) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([contentText], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "download.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <Button className="btn" onClick={() => downloadTxtFile()}>
      Download File
    </Button>
  );
}

export default DownLoadFile;
