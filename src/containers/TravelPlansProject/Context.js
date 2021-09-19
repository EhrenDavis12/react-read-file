import React, { createContext, useContext, useState } from "react";

const TravelPlansContext = createContext({});
const { Provider, Consumer } = TravelPlansContext;


const TravelPlansProvider = ({ children, ...props }) => {
    const [directFare, setDirectFare] = useState(0);
    const [lowestFare, setLowestFare] = useState(0);
    const [fromCity, setFromCity] = useState("New York");
    const [toCity, setToCity] = useState("Phoenix");
    const [rout, setRout] = useState(["New York", "Phoenix"]);
    const [fares, setFares] = useState(["New York", "Phoenix"]);
    const [cities, setCities] = useState(["New York", "Phoenix"]);

    return (
        <Provider value={{
            directFare, setDirectFare,
            lowestFare, setLowestFare,
            fromCity, setFromCity,
            toCity, setToCity,
            rout, setRout,
            fares, setFares,
            cities, setCities
        }} {...props}>
            {children}
        </Provider>
    );
};

const useTravelPlansContext = () => {
    const state = useContext(TravelPlansContext);
    if (state === undefined) {
        throw new Error(
            "useTravelPlansContext must be called within TravelPlansProvider"
        );
    }

    return {
        ...state,
    };
};

export {
    TravelPlansProvider,
    Consumer as TravelPlansConsumer,
    useTravelPlansContext,
};

export default TravelPlansContext;