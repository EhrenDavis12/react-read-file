import React from "react";

import { useReadyToGoContext } from "../Context";
import {ComponentBox} from "../../../components/SharedStyles";

export default function ResultDisplay() {
    const { someData } = useReadyToGoContext();
    return (
        <ComponentBox>
            <p>Results:</p>
            <ul>
                {someData.map(data =>
                    <li key={`data_${data}`}>{data}</li>
                )}
            </ul>
        </ComponentBox>
    );
}