import React from "react";
import GetFile from "./GetFile";
import GetNumColumns from "./GetNumColumns";
import GetFileType from "./GetFileType";
import FileWork from "./FileWork";

function Home() {
  return (
    <div className="container">
      <GetFile />
      <GetNumColumns />
      <GetFileType />
      <FileWork />
    </div>
  );
}

export default Home;
