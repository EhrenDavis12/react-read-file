import React from "react";
import FileResults from "./FileResults";
function DisplayFileStatus({ fileContent, fieldCount, fileType }) {
  return (
    <div>
      <FileResults name="Field count" content={fieldCount} />
      <FileResults name="Field type" content={fileType} />
      <FileResults name="Original file content" content={fileContent} />
    </div>
  );
}

export default DisplayFileStatus;
