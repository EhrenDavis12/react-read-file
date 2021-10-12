import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { LongContent } from "./Components/LongContent";

import { TravelPlansProvider } from "./Context";
import FareButtons from "./Components/FareButtons";
import ResultDisplay from "./Components/ResultDisplay"
import FareDisplay from "./Components/FareDisplay"
import CitySelect from "./Components/CitySelect"
import RandomizeFareButtons from "./Components/RandomizeFareButtons";

function Page() {
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Travel Plans Code Challenge">
                    {LongContent.Challenge}
            </PageHeader>
            <TravelPlansProvider>
                <FareDisplay/>
                <RandomizeFareButtons/>
                <CitySelect/>
                <FareButtons/>
                <ResultDisplay/>
            </TravelPlansProvider>
        </Container>
    );
}

export default Page;
