import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import { Data } from "./LongContent";
import { ComponentBox } from "../../components/SharedStyles";

function VueDjangoPage() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="Vue and Django Full-Stack challenge">
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
          {Data.Challenge}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
          All Projects
        </Link>
      </PageHeader>

      <ComponentBox>
        <a
          href="https://github.com/EhrenDavis12/user-activity-monitor"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to GitHub Vue Project
        </a>
      </ComponentBox>

      <ComponentBox>
        <a
          href="https://user-activity-monitor.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to deployed Vue Project
        </a>
      </ComponentBox>

      <ComponentBox>
        <a
          href="https://github.com/EhrenDavis12/python-user-test-api"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to GitHub Django API
        </a>
      </ComponentBox>

      <ComponentBox>
        <a
          href="https://python-user-test-api.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to deployed Django API
        </a>
      </ComponentBox>
    </Container>
  );
}

export default VueDjangoPage;
