// import React, { useState, useEffect } from "react";
import React from "react";
import { ComponentBox } from "../components/SharedStyles";
import OnChangeSaveToStore from "./OnChangeSaveToStore";

/*
Use this to get the count of the fields the use is looking for
Will render full card
Places file content into the Store
*/
function GetNumColumns({ onChangeSaveToStore, onChange }) {
  return (
    <ComponentBox>
      <p>How many fields should each record contain?</p>
      <input
        type="number"
        pattern="[0-9]*"
        name="fieldCount"
        onChange={e => onChange(e, "fieldCount")}
      />
    </ComponentBox>
  );
}

export default OnChangeSaveToStore(GetNumColumns);
