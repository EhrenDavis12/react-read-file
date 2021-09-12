import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import InfoModel from "../../components/InfoModel";
import Link from "../../components/LinkToButton";
import GetNumberFromUser from "../../components/GetNumberFromUser";
import SnakeMatrixDisplay from "./SnakeMatrixDisplay";
import { Data } from "./LongContent";

function SnakeMatrixPage() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="SNAKE MATRIX">
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
          {Data.Challenge}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
          All Projects
        </Link>
      </PageHeader>
      <GetNumberFromUser
        title="Select a Matrix Size"
        fieldName="matrixSize"
        defaultValue="4"
      />
      <SnakeMatrixDisplay />
    </Container>
  );
}

export default SnakeMatrixPage;
