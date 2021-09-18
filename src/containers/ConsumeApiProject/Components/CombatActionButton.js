import React from "react";

import { useConsumeApiContext } from "../Context";
import {Button, ComponentBox} from "../../../components/SharedStyles";
import {takeCombatAction} from "../Calculate";

export default function CombatActionButton() {
    const localConsumeAPIContext = useConsumeApiContext();
    return (
        <ComponentBox>
            <Button className="btn" onClick={() => takeCombatAction(localConsumeAPIContext)}>
                Combat Action
            </Button>
        </ComponentBox>
    );
}