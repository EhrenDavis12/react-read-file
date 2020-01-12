import React from "react";
import ProjectCards from "../components/ProjectCards";
import PageHeader from "../components/PageHeader";
import { Container, Row } from "react-bootstrap";
const classCenter = "justify-content-lg-center";
function HomePage() {
  return (
    <Container>
      <PageHeader title="Here is a collection of different coding challenges." subText="By Ehren Davis"/>

      <Row className={classCenter}>
        <ProjectCards
          title="Read File"
          description="This was a test to read in a file and parse it. Create 2 files from the result. Try it out!!!"
          buttonText="Go to Project"
          to="readfile"
        />
        <ProjectCards
          title="FizzBuzz"
          description="The game that divides by 3 and 5!!!"
          buttonText="Go to Project"
          to="fizzbuzz"
        />
      </Row>
    </Container>
  );
}

export default HomePage;
