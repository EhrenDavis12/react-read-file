import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import GetNumberFromUser from "../../components/GetNumberFromUser";
import FizzBuzzWork from "./FizzBuzzWork";
import { LongContent } from "./LongContent";

function Page() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="FIZZ BUZZ">
          {LongContent.Challenge}
      </PageHeader>
      <GetNumberFromUser
        title="Select a number to start at"
        fieldName="fb_Min"
        defaultValue="0"
      />
      <GetNumberFromUser
        title="Select a number to end at"
        fieldName="fb_Max"
        defaultValue="100"
      />
      <FizzBuzzWork />
    </Container>
  );
}

export default Page;
