import React from "react";
import { Container } from "react-bootstrap";
import GetFile from "./GetFile";
import GetNumColumns from "./GetNumColumns";
import GetFileType from "./GetFileType";
import FileWork from "./FileWork";
import PageHeader from "../components/PageHeader";
import InfoModel from "../components/InfoModel";
import Link from "../components/LinkToButton";
import { Data } from "./LongContent";

function ReadFilePage() {
  return (
    <Container style={{ paddingBottom: "100px" }}>
      <PageHeader title="Read Your File and parse it">
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
          {Data.ReadFilePage.Challenge}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
          All Projects
        </Link>
      </PageHeader>

      <GetFile />
      <GetNumColumns />
      <GetFileType />
      <FileWork />
    </Container>
  );
}

export default ReadFilePage;
