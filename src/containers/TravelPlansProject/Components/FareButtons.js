import React from "react";

import { useTravelPlansContext } from "../Context";
import {Button, ComponentBox} from "../../../components/SharedStyles";
import {setTravelFares} from "../CalculateFare";
// import {setFares} from "../GenerateFares";

export default function FareButtons() {
    const localTravelPlansContext = useTravelPlansContext();
    return (
        <ComponentBox>
            {/*<Button className="btn" onClick={() => setFares(localTravelPlansContext)}>*/}
            {/*    Generate Fares*/}
            {/*</Button>*/}
            <Button className="btn" onClick={() => setTravelFares(localTravelPlansContext)}>
                Find Fare Cost
            </Button>
        </ComponentBox>
    );
}