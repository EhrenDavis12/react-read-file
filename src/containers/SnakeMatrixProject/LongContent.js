import React from "react";
import {Tab} from "../../components/SharedStyles";

export const LongContent = {
    Challenge: (
        <div>
            <p>
                Given any Box Matrix (array of arrays) we will want to travers and print out each entry.
            </p>
            <p>
                Write an algorithm that prints the numbers in order going in clock wise direction
                The element will not repeat them selves.
            </p>
            <p>
                (Top Lest -> Top Right -> Bottom Right -> Bottom Left -> Top Left...)
            </p>
            <p>
                [<br/>
                    <Tab>[ 1, 2, 3, 4 ]<br/></Tab>
                    <Tab>[ C, D, E, 5 ]<br/></Tab>
                    <Tab>[ B, G, F, 6 ]<br/></Tab>
                    <Tab>[ A, 9, 8, 7 ]<br/></Tab>
                ]
            </p>
            <p>
                results from the above matrix would look like this:<br/>
                1 2 3 4 5 6 7 8 9 A B C D E F G
            </p>
        </div>
    )
};