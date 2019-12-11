import React, { useState, useEffect } from "react";
import { withStore } from "./Store";
import { ComponentBox } from "../components/SharedStyles";

/*
Use this to get the count of the fields the use is looking for
Will render full card
Places file content into the Store
*/
function GetNumColumns({ store }) {
  const [fieldCount, setFieldCount] = useState(0);

  useEffect(() => {
    store.set("fieldCount", fieldCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldCount]);

  const handleInputChange = e => {
    setFieldCount(e.currentTarget.value);
  };

  return (
    <ComponentBox>
      <p>How many fields should each record contain?</p>
      <input
        type="number"
        pattern="[0-9]*"
        name="fieldCount"
        onChange={handleInputChange}
      />
    </ComponentBox>
  );
}

export default withStore(GetNumColumns);
