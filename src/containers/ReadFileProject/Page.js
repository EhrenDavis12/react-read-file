import React from "react";
import { Container } from "react-bootstrap";
import GetFile from "./GetFile";
import GetNumberFromUser from "../../components/GetNumberFromUser";
import GetFileType from "./GetFileType";
import FileWork from "./FileWork";
import PageHeader from "../../components/PageHeader";
import { LongContent } from "./LongContent";

function Page() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="Read Your File and parse it">
        {LongContent.Challenge}
      </PageHeader>

      <GetFile />
      <GetNumberFromUser
        title="How many fields should each record contain?"
        fieldName="fr_fieldCount"
        defaultValue="3"
      />
      <GetFileType />
      <FileWork />
    </Container>
  );
}

export default Page;
