import React, { useState } from "react";
import { withStore } from "../Store";
import ViewerWithTitle from "../../components/ViewerWithTitle";
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

    if (!localState.fileContent) {
      setMessage("please select a file");
      return;
    }
    setMessage("");
    setShowSummary(true);

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
            <ViewerWithTitle name="Field count">{`${fieldCount}`}</ViewerWithTitle>
            <ViewerWithTitle name="Field type">{fileType}</ViewerWithTitle>
            <ViewerWithTitle
              name="Original file content"
              title="Original file content"
              ButtonText="View Original File"
            >
              {fileContent}
            </ViewerWithTitle>
          </>
        ) : null}
      </ComponentBox>
      {showSummary ? (
        <>
          <ComponentBox>
            <ViewerWithTitle
              name="File with requested records having the field count"
              title="File with non requested records"
              ButtonText="View File Results"
            >
              {file1}
            </ViewerWithTitle>
            <DownLoadFile contentText={file1} />
          </ComponentBox>

          <ComponentBox>
            <ViewerWithTitle
              name="File with non requested records"
              title="File with non requested records"
              ButtonText="View File Results"
            >
              {file2}
            </ViewerWithTitle>
            <DownLoadFile contentText={file2} />
          </ComponentBox>
        </>
      ) : null}
    </div>
  );
}

export default withStore(FileWork);
