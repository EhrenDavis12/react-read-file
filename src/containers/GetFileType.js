import React, { useState, useEffect } from "react";
import { withStore } from "./Store";
import { Button, ButtonGroup } from "react-bootstrap";
import { ComponentBox } from "../components/SharedStyles";

/*
Use this to Get the file type from the user. 
Will render full card
Places file content into the Store
*/
function GetFileType({ store }) {
  const [fileType, setFileType] = useState("Auto");

  useEffect(() => {
    store.set("fileType", fileType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileType]);

  const handleInputChange = e => {
    setFileType(e.currentTarget.value);
  };

  return (
    <ComponentBox>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" value="Auto" onClick={handleInputChange}>
          Auto
        </Button>
        <Button variant="secondary" value="CSV" onClick={handleInputChange}>
          CSV
        </Button>
        <Button variant="secondary" value="TSV" onClick={handleInputChange}>
          TSV
        </Button>
      </ButtonGroup>
    </ComponentBox>
  );
}

export default withStore(GetFileType);
