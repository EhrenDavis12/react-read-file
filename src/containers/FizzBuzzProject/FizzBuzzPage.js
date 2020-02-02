import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import GetNumberFromUser from "../../components/GetNumberFromUser";
import FizzBuzzWork from "./FizzBuzzWork";
import { Data } from "./LongContent";

function FizzBuzzPage() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="FIZZ BUZZ">
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
          {Data.Challenge}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
          All Projects
        </Link>
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

export default FizzBuzzPage;
