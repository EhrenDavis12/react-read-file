import React from "react";

import { useReadyToGoContext } from "../Context";
import {Button, ComponentBox} from "../../../components/SharedStyles";
import {setCallToAction} from "../Calculate";

export default function ActionBar() {
    const travelPlansContext = useReadyToGoContext();
    return (
        <ComponentBox>
            <Button className="btn" onClick={() => setCallToAction(travelPlansContext)}>
                Action Button
            </Button>
        </ComponentBox>
    );
}