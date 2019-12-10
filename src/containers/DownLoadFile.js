import React, { useState, useEffect } from "react";
import { withStore } from "./Store";

function DownLoadFile({ contentText }) {
  const downloadTxtFile = () => {
    debugger;
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
    <button className="btn" onClick={() => downloadTxtFile()}>
      Download File
    </button>
  );
}

export default withStore(DownLoadFile);
// export default GetFile;
