import React from "react";

import { useTravelPlansContext } from "../Context";
import {Button, ComponentBox} from "../../../components/SharedStyles";
import {setRandomFares} from "../GenerateFares";

export default function RandomizeFareButtons() {
    const {setFares, cities} = useTravelPlansContext();
    return (
        <ComponentBox>
            <Button className="btn" onClick={() => setRandomFares(cities, setFares)}>
                Reset Fares
            </Button>
        </ComponentBox>
    );
}