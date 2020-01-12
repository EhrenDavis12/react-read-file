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
// import InfoModel from "../../components/InfoModel";

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
            <FileResults name="Field count">{`${fieldCount}`}</FileResults>
            <FileResults name="Field type">{fileType}</FileResults>
            <FileResults
              name="Original file content"
              title="Original file content"
              ButtonText="View Original File"
            >
              {fileContent}
            </FileResults>
          </>
        ) : null}
      </ComponentBox>
      {showSummary ? (
        <>
          <ComponentBox>
            <FileResults
              name="File with requested records having the field count"
              title="File with non requested records"
              ButtonText="View File Results"
            >
              {file1}
            </FileResults>
            <DownLoadFile contentText={file1} />
          </ComponentBox>

          <ComponentBox>
            <FileResults
              name="File with non requested records"
              title="File with non requested records"
              ButtonText="View File Results"
            >
              {file2}
            </FileResults>
            <DownLoadFile contentText={file2} />
          </ComponentBox>
        </>
      ) : null}
    </div>
  );
}

export default withStore(FileWork);
