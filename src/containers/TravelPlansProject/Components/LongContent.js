import React from "react";
import {Tab} from "../../../components/SharedStyles";

export const LongContent = {
    Challenge: (
        <div>
            <p>This is a recursive algorithm Code challenge!</p>
            <ol>
                <li>Find the fare it would take to travel from one city to another.</li>
                <li>find the lowest fare it would take to travel between cities. The lowest fare can include as many layovers as needed.</li>
            </ol>
            <p>
                Cities = ['New York', 'Paris', 'Rome', 'Phoenix']<br/>
                Fares = [
                <Tab>0, 100, 150, 250,</Tab>
                <Tab>30, 0, 300, 200,</Tab>
                <Tab>200, 100, 0, 50,</Tab>
                <Tab>50, 100, 300, 0</Tab>
                ]
            </p>
        </div>
    )
};
