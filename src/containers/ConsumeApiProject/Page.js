import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { LongContent } from "./Components/LongContent";
import { ConsumeApiProvider } from "./Context";

import ActionDisplay from "./Components/ActionDisplay"
import PlayerListDisplay from "./Components/PlayerListDisplay"
import CombatActionButton from "./Components/CombatActionButton"

function Page() {
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Consume an API Code Challenge">
                {LongContent.Challenge}
            </PageHeader>
            <ConsumeApiProvider>
                <CombatActionButton />
                <PlayerListDisplay />
                <ActionDisplay />
            </ConsumeApiProvider>
        </Container>
    );
}

export default Page;
