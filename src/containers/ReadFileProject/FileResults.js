import React from "react";
import PropTypes from "prop-types";
import InfoModel from "../../components/InfoModel";
import { Styled, Text } from "../../components/SharedStyles";

const FullResult = Styled.div`
margin-top: 20px;
`;

const Name = Styled.div`
font-weight: bold;
`;

const Spacer = Styled.div`margin: 0px 0px 10px 0px`;

function FileResults({ name, children, ...props }) {
  return (
    <FullResult>
      <Name>{name}:</Name>

      {props.title ? (
        <Spacer>
          <InfoModel {...props}>
            <Text>{children}</Text>
          </InfoModel>
        </Spacer>
      ) : (
        <Text>{children}</Text>
      )}
    </FullResult>
  );
}

FileResults.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FileResults;
