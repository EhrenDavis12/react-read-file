import React, { useState } from "react";
import { withStore } from "../Store";
import { ComponentBox, Button, Ul } from "../../components/SharedStyles";
import { api_call } from "./Calculate";

function BlankDisplay({ store }) {
  const [listItems, setListItems] = useState();
  const [showResults, setShowResults] = useState(false);

  const getApiResults = async () => {
    api_call().then(response => {
        setListItems(
        response.map(user => (
          <li key={`user_${user.id}`}>
            {user.username}
          </li>
        ))
      );
      setShowResults(true);
    });
  };

  return (
    <div>
      <ComponentBox>
        <Button className="btn" onClick={() => getApiResults()}>
          Compose User List
        </Button>
      </ComponentBox>

      {showResults && listItems ? (
        <ComponentBox>
          <Ul>{listItems}</Ul>
        </ComponentBox>
      ) : null}
    </div>
  );
}

export default withStore(BlankDisplay);
