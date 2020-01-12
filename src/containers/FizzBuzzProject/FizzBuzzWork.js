import React, { useState } from "react";
import { withStore } from "../Store";
import { ComponentBox, Button, Ul } from "../../components/SharedStyles";
import { GetFizzBuzz } from "./Calculate";

function FizzBuzzWork({ store }) {
  const [listItems, setListItems] = useState();
  const [showResults, setShowResults] = useState(false);

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
    setShowResults(true);
  };

  return (
    <div>
      <ComponentBox>
        <Button className="btn" onClick={() => compileData()}>
          Compose FizzBuzz List
        </Button>
      </ComponentBox>

      {showResults ? (
        <ComponentBox>
          <Ul>{listItems}</Ul>
        </ComponentBox>
      ) : null}
    </div>
  );
}

export default withStore(FizzBuzzWork);
