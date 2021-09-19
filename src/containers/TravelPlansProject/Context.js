import React, { createContext, useContext, useState } from "react";

const TravelPlansContext = createContext({});
const { Provider, Consumer } = TravelPlansContext;

const defaultCities = ['New York', 'Paris', 'Rome', 'Phoenix']
const defaultFares = [
    0, 100, 150, 250,
    30, 0, 300, 200,
    200, 100, 0, 50,
    50, 100, 300, 0
]


const TravelPlansProvider = ({ children, ...props }) => {
    const [directFare, setDirectFare] = useState(0);
    const [lowestFare, setLowestFare] = useState(0);
    const [fromCity, setFromCity] = useState("New York");
    const [toCity, setToCity] = useState("Phoenix");
    const [rout, setRout] = useState(["New York", "Phoenix"]);
    const [fares, setFares] = useState(defaultFares);
    const [cities, setCities] = useState(defaultCities);

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