import React, { useState } from "react";
import { withStore } from "../Store";
import { ComponentBox, Button, Ul } from "../../components/SharedStyles";
import { api_call, processCombatResponse } from "./Calculate";

function ConsumeApiDisplay({ store }) {
  const [listItems, setListItems] = useState();
  const [showResults, setShowResults] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const [displayPlayers, setDisplayPlayers] = useState();

  const getApiResults = async () => {
    api_call().then(response => {
        setPlayersData(processCombatResponse(response, playersData));
        displayCombatAction(response);
        setDisplayPlayersComponent();
    });
  };

  const displayCombatAction = (response) => {
      setListItems(
        response.map(action => {
            return Object.entries(action).map(x => <li key={`action_${x[0]}`}>{x.join(": ")}</li>);
        })
      );
      setShowResults(true);
  };

  const setDisplayPlayersComponent = () => {
      setDisplayPlayers(
        playersData.map(player => {
            return <li key={`action_${player.id}`}>{player.name} - Health:{player.health}</li>
        })
      );
  };

  return (
      <div>
          <ComponentBox>
              <Button className="btn" onClick={() => getApiResults()}>
                  Combat Action
              </Button>
          </ComponentBox>

          <ComponentBox>
              <ul>{displayPlayers}</ul>
          </ComponentBox>

          {showResults ? (
              <ComponentBox>
                  <ul>{listItems}</ul>
              </ComponentBox>
          ) : null}

      </div>
  );
}

export default withStore(ConsumeApiDisplay);
