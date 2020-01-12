import React, { useState } from "react";
import { withStore } from "../Store";
import FileResults from "./FileResults";
import {
  ComponentBox,
  Button,
  ErrorMessage
} from "../../components/SharedStyles";
import DownLoadFile from "./DownLoadFile";
import { CreateSubFilesUsingFileCount } from "./CreateFileUtils";

/*
Will render full card
Displays the state as a card -- this helps to Identify what state is used to run the file.
Displays resulting files available for download.
*/
function FileWork({ store }) {
  const [fileContent, setFileContent] = useState("");
  const [fieldCount, setFieldCount] = useState("");
  const [fileType, setFileType] = useState("");
  const [message, setMessage] = useState("");

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const getStoreDataAsync = async () => {
    return {
      fileContent: await store.get("file"),
      fieldCount: await store.get("fieldCount"),
      fileType: await store.get("fileType")
    };
  };

  const compileDataForFiles = async () => {
    const localState = await getStoreDataAsync();
    debugger;
    setFileContent(localState.fileContent);
    setFieldCount(parseInt(localState.fieldCount));
    setShowSummary(true);

    if (!localState.fileContent) {
      setMessage("please select a file");
      return;
    }
    setMessage("");

    const jsonFiles = CreateSubFilesUsingFileCount(localState);
    setFile1(jsonFiles.fileWithFieldCount);
    setFile2(jsonFiles.fileWithOutFieldCount);
    setFileType(jsonFiles.delimiter.name);
  };

  return (
    <div>
      <ComponentBox>
        <Button className="btn" onClick={() => compileDataForFiles()}>
          Compose Files
        </Button>
        <ErrorMessage>{message}</ErrorMessage>
        {showSummary ? (
          <>
            <FileResults name="Field count" content={`${fieldCount}`} />
            <FileResults name="Field type" content={fileType} />
            <FileResults name="Original file content" content={fileContent} />
          </>
        ) : null}
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
