import React, { createContext, useContext, useState } from "react";

const YourContext = createContext({});
const { Provider, Consumer } = YourContext;

const YourProvider = ({ children, ...props }) => {
  const [state, setState] = useState(null);

  return (
    <Provider value={{ state }} {...props}>
      {children}
    </Provider>
  );
};

const useYourContext = () => {
  const state = useContext(YourContext);
  if (state === undefined) {
    throw new Error(
      "useYourContext must be called within YourProvider"
    );
  }

  return {
    ...state,
  };
};

export {
  YourProvider,
  Consumer as YourConsumer,
  useYourContext,
};

export default YourContext;