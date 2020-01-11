import React from "react";
import { withStore } from "../Store";
import { ComponentBox } from "../../components/SharedStyles";

/*
Use this to get the count of the fields the use is looking for
Will render full card
Places file content into the Store
*/
function GetNumColumns({ store }) {
  return (
    <ComponentBox>
      <p>How many fields should each record contain?</p>
      <input
        type="number"
        pattern="[0-9]*"
        name="fieldCount"
        onChange={event => store.set("fieldCount", event.currentTarget.value)}
      />
    </ComponentBox>
  );
}

export default withStore(GetNumColumns);
