import React from "react";
import { Styled } from "../components/SharedStyles";

const FullResult = Styled.div`
margin-top: 20px;
`;

const Name = Styled.div`
font-weight: bold;
`;
const Text = Styled.div`
white-space: pre-line;
`;

function FileResults({ name, content }) {
  return (
    <FullResult>
      <Name>{name}:</Name>
      <Text>{content}</Text>
    </FullResult>
  );
}

export default FileResults;
