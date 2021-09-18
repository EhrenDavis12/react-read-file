import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import { Data } from "./Components/LongContent";
import { ConsumeApiProvider } from "./Context";

import ActionDisplay from "./Components/ActionDisplay"
import PlayerListDisplay from "./Components/PlayerListDisplay"
import CombatActionButton from "./Components/CombatActionButton"

function Page() {
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Consume an API Code Challenge">
                <InfoModel title="The Challenge" ButtonText="Read The Challenge">
                    {Data.Challenge}
                </InfoModel>
                <br />
                <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
                    All Projects
                </Link>
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
