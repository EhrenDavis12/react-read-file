import React, { useState } from "react";
import { withStore } from "../Store";
import { ComponentBox, Button, Ul } from "../../components/SharedStyles";
import { GetFizzBuzz } from "./Calculate";

/*
Will render full card
Displays the state as a card -- this helps to Identify what state is used to run the file.
Displays resulting files available for download.
*/
function FizzBuzzWork({ store }) {
  const [listItems, setListItems] = useState();

  const getStoreDataAsync = async () => {
    return {
      min: await store.get("fb_Min"),
      max: await store.get("fb_Max")
    };
  };

  const compileData = async () => {
    const localState = await getStoreDataAsync();

    const results = GetFizzBuzz(localState);
    setListItems(
      results.map(number => (
        <li key={`fb_list_${number.key}`}>
          {number.key}: {number.value}
        </li>
      ))
    );
  };

  return (
    <div>
      <ComponentBox>
        <Button className="btn" onClick={() => compileData()}>
          Compose FizzBuzz List
        </Button>
      </ComponentBox>

      <ComponentBox>
        <Ul>{listItems}</Ul>
      </ComponentBox>
    </div>
  );
}

export default withStore(FizzBuzzWork);
