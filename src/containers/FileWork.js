import React, { useState, useEffect } from "react";
import { withStore } from "./Store";
import FileResults from "../components/FileResults";
import DisplayFileStatus from "../components/DisplayFileStatus";
import { ComponentBox, ErrorMessage, Button } from "../components/SharedStyles";
import DownLoadFile from "./DownLoadFile";

function FileWork({ store }) {
  const [fileContent, setFileContent] = useState("");
  const [fieldCount, setFieldCount] = useState(0);
  const [fileType, setFileType] = useState("");
  const [message, setMessage] = useState("");

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  let delimiter = ",";
  // let DisplayFileStatusJSX = (
  //   <DisplayFileStatus fileContent="" fieldCount="" fileType="" />
  // );

  const createFiles = async () => {
    let buildFile1 = "";
    let buildFile2 = "";
    let Header = "";

    const storeFileContent = await store.get("file");
    const storeFieldCount = await store.get("fieldCount");
    const storeFileType = await store.get("fileType");
    setFileContent(storeFileContent);
    setFieldCount(parseInt(storeFieldCount));
    setFileType(storeFileType);
    // DisplayFileStatusJSX = (
    //   <DisplayFileStatus
    //     fileContent={storeFileContent}
    //     fieldCount={storeFieldCount}
    //     fileType={storeFileType}
    //   />
    // );

    storeFileType === "CSV" ? (delimiter = ",") : (delimiter = "\t");

    if (!storeFileContent) {
      setMessage("please select a file");
      return;
    }
    setMessage("");

    let lines = storeFileContent.split("\n");
    lines.forEach(line => {
      const fields = line.split(delimiter);
      if (Header === "") Header = line;
      else {
        if (fields.length === parseInt(storeFieldCount))
          buildFile1 += `\n${line}`;
        else buildFile2 += `\n${line}`;
      }
    });
    setFile1(Header + buildFile1);
    setFile2(Header + buildFile2);
  };

  return (
    <div>
      <ComponentBox>
        <Button className="btn" onClick={() => createFiles()}>
          Compose Files
        </Button>
        <ErrorMessage>{message}</ErrorMessage>
        <FileResults name="Field count" content={fieldCount} />
        <FileResults name="Field type" content={fileType} />
        <FileResults name="Original file content" content={fileContent} />
        {/* <DisplayFileStatusJSX /> */}
      </ComponentBox>

      <ComponentBox>
        <FileResults
          name="File with requested records having the field count"
          content={file1}
        />
        <DownLoadFile contentText={file1} />
      </ComponentBox>

      <ComponentBox>
        <FileResults name="File with non requested records" content={file2} />
        <DownLoadFile contentText={file2} />
      </ComponentBox>
    </div>
  );
}

export default withStore(FileWork);
