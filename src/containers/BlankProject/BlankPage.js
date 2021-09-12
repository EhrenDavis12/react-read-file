import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import BlankDisplay from "./BlankDisplay";
import { Data } from "./LongContent";

function BlankPage() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="Blank Code Challenge">
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

export default BlankPage;
