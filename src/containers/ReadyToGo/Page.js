import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { longContent } from "./Components/LongContent";

import { ReadyToGoProvider } from "./Context";
import ResultDisplay from "./Components/ResultDisplay"
import ActionBar from "./Components/ActionBar";

function Page() {
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Ready To Go Code Challenge">
                {longContent.Challenge}
            </PageHeader>
            <ReadyToGoProvider>
                <ActionBar/>
                <ResultDisplay/>
            </ReadyToGoProvider>
        </Container>
    );
}

export default Page;
