import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import GetNumberFromUser from "../../components/GetNumberFromUser";
import SnakeMatrixDisplay from "./SnakeMatrixDisplay";
import { LongContent } from "./LongContent";

function Page() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="SNAKE MATRIX">
        {LongContent.Challenge}
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

export default Page;
