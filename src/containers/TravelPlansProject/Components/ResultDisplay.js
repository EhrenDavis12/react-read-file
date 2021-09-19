import React from "react";

import { useTravelPlansContext } from "../Context";
import {ComponentBox} from "../../../components/SharedStyles";

export default function ResultDisplay() {
    const { lowestFare, directFare, fromCity, toCity, rout } = useTravelPlansContext();
    return (
        <ComponentBox>
            <p>Departure City: {fromCity}</p>
            <p>Destination City: {toCity}</p>
            <p>Direct Fare Cost: {directFare}</p>
            <p>Lowest Fare Cost: {lowestFare}</p>
            <p>Lowest Fare Rout:</p>
            <ul>
                {rout.map(city =>
                    <li key={`rout_${city}`}>{city}</li>
                )}
            </ul>
        </ComponentBox>
    );
}