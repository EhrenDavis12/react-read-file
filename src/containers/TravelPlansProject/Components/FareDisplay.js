import React from "react";

import { useTravelPlansContext } from "../Context";
import { getFaresList} from "../CalculateFare"
import {ComponentBox} from "../../../components/SharedStyles";
import { Table } from "react-bootstrap";

export default function FareDisplay() {
    const { cities, fares } = useTravelPlansContext();
    const faresList = getFaresList(cities, fares);

    return (
        <ComponentBox>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th></th>
                    {cities.map(city =>
                        <th key={`city_column_${city}`}>{city}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                    {cities.map((city, index) =>
                        <tr key={`city_row_${city}`}>
                            <td>{city}</td>
                            {faresList[index].map(fare =>
                                <td key={`fare_${city}_`}>
                                    {fare}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </Table>
        </ComponentBox>
    );
}