import React, { useState, useEffect } from "react";
import { withStore } from "./Store";
import { ComponentBox } from "../components/SharedStyles";

function GetFileType({ store }) {
  const [fileType, setFileType] = useState("CSV");

  useEffect(() => {
    debugger;
    store.set("fileType", fileType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileType]);

  const handleInputChange = e => {
    setFileType(e.currentTarget.value);
  };

  return (
    <ComponentBox>
      <p>What is the file type?</p>
      <label className="radio-inline">
        <input
          type="radio"
          name="optradio"
          checked
          value="CSV"
          onChange={handleInputChange}
          onClick={handleInputChange}
        />
        CSV
      </label>
      <label className="radio-inline">
        <input
          type="radio"
          name="optradio"
          value="TSV"
          onClick={handleInputChange}
        />
        TSV
      </label>
    </ComponentBox>
  );
}

export default withStore(GetFileType);
