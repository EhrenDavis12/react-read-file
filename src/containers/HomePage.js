import React from "react";
import ProjectCards from "../components/ProjectCards";
import PageHeader from "../components/PageHeader";
import { Container, Row } from "react-bootstrap";
const classCenter = "justify-content-lg-center";
function HomePage() {
  return (
    <Container>
      <PageHeader
        title="Here is a collection of different coding challenges."
        subText="By Ehren Davis"
        customHeaders={true}>
        <p><a
            href='https://ehren-davis-profile-app.herokuapp.com/'
            target="_blank"
            rel="noopener noreferrer" >Go to Web Profile</a></p>
      </PageHeader>

      <Row className={classCenter}>
        <ProjectCards
          title="Read File"
          description="This was a test to read in a file and parse it. Create 2 files from the result. Try it out!!!"
          buttonText="Go to Project"
          to="readfile"
          footerText="12/08/2019"
        />
        <ProjectCards
          title="FizzBuzz"
          description="The game that divides by 3 and 5!!!"
          buttonText="Go to Project"
          to="fizzbuzz"
          footerText="01/11/2020"
        />
        <ProjectCards
          title="Vue and Django Full-Stack"
          description="Create a Full-stack application using Vue and Django"
          buttonText="Go to Project"
          to="vue_django"
          footerText="02/01/2020"
        />
        <ProjectCards
          title="Snake Matrix"
          description="Given a Box Matrix (array of arrays) travers it clock wise to make one long array in order."
          buttonText="Go to Project"
          to="snake_matrix"
          footerText="09/11/2021"
        />
        <ProjectCards
          title="Consume Api"
          description="You have 2 hours to consume an Api with randomized data to display to the user"
          buttonText="Go to Project"
          to="consume_api"
          footerText="09/12/2021"
        />
        <ProjectCards
          title="Travel Plans"
          description="Find the route from one city to another"
          buttonText="Go to Project"
          to="travel_plans"
          footerText="09/18/2021"
        />
        <ProjectCards
          title="Ready To Go"
          description="Your Programming Challenge Here"
          buttonText="Go to Project"
          to="ready_to_go"
          footerText="??/??/????"
        />
      </Row>
    </Container>
  );
}

export default HomePage;
