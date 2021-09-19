import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import { Data } from "./Components/LongContent";

import { TravelPlansProvider } from "./Context";
import FareButtons from "./Components/FareButtons";
import ResultDisplay from "./Components/ResultDisplay"
import FareDisplay from "./Components/FareDisplay"

function Page() {
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Travel Plans Code Challenge">
                <InfoModel title="The Challenge" ButtonText="Read The Challenge">
                    {Data.Challenge}
                </InfoModel>
                <br />
                <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
                    All Projects
                </Link>
            </PageHeader>
            <TravelPlansProvider>
                <FareDisplay/>
                <FareButtons />
                <ResultDisplay />
            </TravelPlansProvider>
        </Container>
    );
}

export default Page;
