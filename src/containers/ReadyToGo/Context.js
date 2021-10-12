import React, { createContext, useContext, useState } from "react";

const ReadyToGoContext = createContext({});
const { Provider, Consumer } = ReadyToGoContext;

// Init Data here
const initSomeData = ["Hello"];

const ReadyToGoProvider = ({ children, ...props }) => {
    const [someData, setSomeData] = useState(initSomeData);

    return (
        <Provider value={{
            someData, setSomeData
        }} {...props}>
            {children}
        </Provider>
    );
};

const useReadyToGoContext = () => {
    const state = useContext(ReadyToGoContext);
    if (state === undefined) {
        throw new Error(
            "useReadyToGoContext must be called within ReadyToGoProvider"
        );
    }

    return {
        ...state,
    };
};

export {
    ReadyToGoProvider,
    Consumer as ReadyToGoConsumer,
    useReadyToGoContext,
};

export default ReadyToGoContext;