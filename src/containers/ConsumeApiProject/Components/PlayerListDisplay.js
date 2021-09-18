import React from "react";

import _ from 'lodash';
import { useConsumeApiContext } from "../Context";
import {ComponentBox} from "../../../components/SharedStyles";

export default function ActionDisplay() {
    const { playersData } = useConsumeApiContext();
    return (
        <div>
            {!_.isEmpty(playersData) ? (
                <ComponentBox>
                    Players:
                    <ul>
                        {playersData.map(player =>
                            <li key={`player_${player.id}`}>{player.id} - Health:{player.health}</li>
                        )}
                    </ul>
                </ComponentBox>
            ) : null}
        </div>
    );
}