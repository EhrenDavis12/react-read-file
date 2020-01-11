import React, { useRef } from "react";
import { withStore } from "../Store";
import { Button, ButtonGroup } from "react-bootstrap";
import { ComponentBox } from "../../components/SharedStyles";

/*
Use this to Get the file type from the user. 
Will render full card
Places file content into the Store
*/
function GetFileType({ store }) {
  const autoBtn = useRef(null);
  const csvBtn = useRef(null);
  const tsvBtn = useRef(null);

  const resetActiveClass = e => {
    e.current.className = e.current.className.replace(" active", "");
  };

  const handleInputChange = e => {
    resetActiveClass(autoBtn);
    resetActiveClass(tsvBtn);
    resetActiveClass(csvBtn);
    e.currentTarget.className += " active";
    store.set("fileType", e.currentTarget.value);
  };

  return (
    <ComponentBox>
      <ButtonGroup aria-label="Basic example">
        <Button
          className=" active"
          ref={autoBtn}
          variant="secondary"
          value="Auto"
          onClick={handleInputChange}
        >
          Auto
        </Button>
        <Button
          ref={tsvBtn}
          variant="secondary"
          value="CSV"
          onClick={handleInputChange}
        >
          CSV
        </Button>
        <Button
          ref={csvBtn}
          variant="secondary"
          value="TSV"
          onClick={handleInputChange}
        >
          TSV
        </Button>
      </ButtonGroup>
    </ComponentBox>
  );
}

export default withStore(GetFileType);
