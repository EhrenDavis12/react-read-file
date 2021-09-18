import React, { createContext, useContext, useState } from "react";

const ConsumeApiContext = createContext({});
const { Provider, Consumer } = ConsumeApiContext;


const ConsumeApiProvider = ({ children, ...props }) => {
  const [playersData, setPlayersData] = useState([]);
  const [combatAction, setCombatAction] = useState({});

  return (
    <Provider value={{
      playersData,
      combatAction,
      setPlayersData,
      setCombatAction,
    }} {...props}>
      {children}
    </Provider>
  );
};

const useConsumeApiContext = () => {
  const state = useContext(ConsumeApiContext);
  if (state === undefined) {
    throw new Error(
      "useConsumeApiContext must be called within ConsumeApiProvider"
    );
  }

  return {
    ...state,
  };
};

export {
  ConsumeApiProvider,
  Consumer as ConsumeApiConsumer,
  useConsumeApiContext,
};

export default ConsumeApiContext;