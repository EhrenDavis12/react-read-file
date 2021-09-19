import React from "react";

import { useTravelPlansContext } from "../Context";
import SingleSelect from "../../../components/SingleSelect"
import {ComponentBox} from "../../../components/SharedStyles";
import {Col, Row} from "react-bootstrap";

export default function CitySelect() {
    const { cities, setFromCity, setToCity, fromCity, toCity } = useTravelPlansContext();
    const cityOptions = cities.map(city=>{
        return {key: city, value: city};
    })
    function onFromCitySelect(event) {
        debugger;
        setFromCity(event.target.value);
    }
    return (
        <ComponentBox>
            <Row>
                <Col><SingleSelect
                    items={cityOptions}
                    defaultValue={fromCity}
                    message="Select Departure City:"
                    setSelected={setFromCity}
                /></Col>
                <Col><SingleSelect
                    items={cityOptions}
                    defaultValue={toCity}
                    message="Select Destination City:"
                    setSelected={setToCity}
                /></Col>
            </Row>
        </ComponentBox>
    );
}