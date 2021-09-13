import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import BlankDisplay from "./ConsumeApiDisplay";
import { Data } from "./LongContent";

function ConsumeApiPage() {
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
      <BlankDisplay />
    </Container>
  );
}

export default ConsumeApiPage;
