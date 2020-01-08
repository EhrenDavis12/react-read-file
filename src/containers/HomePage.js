import React from "react";
import ProjectCards from "../components/ProjectCards";
import PageHeader from "../components/PageHeader";
import { Container, Row } from "react-bootstrap";
const classCenter = "justify-content-lg-center";
function HomePage() {
  return (
    <Container>
      <PageHeader title="Here is a collection of different coding challenges." />

      <Row className={classCenter}>
        <ProjectCards
          title="Read File"
          description="This was a test to read in a file and parse it. Create 2 files from the result. Try it out!!!"
          buttonText="Go to Project"
          // onClick={() => console.log("Card button clicked")}
          to="readfile"
        />
      </Row>
    </Container>
  );
}

export default HomePage;
