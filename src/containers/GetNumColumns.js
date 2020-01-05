// import React, { useState, useEffect } from "react";
import React from "react";
import { ComponentBox } from "../components/SharedStyles";
// import withOnChange from "./OnChangeSaveToStore";
import { withOnChange2, withOnChange } from "./OnChangeSaveToStore";

/*
Use this to get the count of the fields the use is looking for
Will render full card
Places file content into the Store
*/
function GetNumColumns({ onChange }) {
  return (
    <ComponentBox>
      <p>How many fields should each record contain?</p>
      <input
        type="number"
        pattern="[0-9]*"
        name="fieldCount"
        onChange={e => {
          onChange("fieldCount", e);
        }}
      />
    </ComponentBox>
  );
}

export default withOnChange2(withOnChange(GetNumColumns));
