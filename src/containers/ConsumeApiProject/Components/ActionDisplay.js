import React from "react";

import _ from 'lodash';
import { useConsumeApiContext } from "../Context";
import {ComponentBox} from "../../../components/SharedStyles";

export default function ActionDisplay() {
    const { combatAction } = useConsumeApiContext();
    return (
        <div>
            {!_.isEmpty(combatAction) ? (
                <ComponentBox>
                    Player Action:
                    {_.has(combatAction, 'missed') ? (
                    <ul>
                        <li key={`action_missed`}>{combatAction.missed}</li>
                    </ul>
                    ) : (
                    <ul>
                        {Object.entries(combatAction).map(
                            x => <li key={`action_${x[0]}`}>{x.join(": ")}</li>
                        )}
                    </ul>
                    )}
                </ComponentBox>
            ) : null}
        </div>
    );
}