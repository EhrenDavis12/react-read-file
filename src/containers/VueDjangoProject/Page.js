import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { LongContent } from "./LongContent";
import { ComponentBox } from "../../components/SharedStyles";

function Page() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="Vue and Django Full-Stack challenge">
          {LongContent.Challenge}
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
          href="https://user-activity-monitor-8d0d4cd27f84.herokuapp.com/"
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
          href="https://code-challenge-app-0b05fd4406a4.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to deployed Django API
        </a>
      </ComponentBox>
    </Container>
  );
}

export default Page;
