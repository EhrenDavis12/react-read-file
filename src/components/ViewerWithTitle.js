import React from "react";
import PropTypes from "prop-types";
import InfoModel from "./InfoModel";
import { Styled, Text } from "./SharedStyles";

const FullResult = Styled.div`
margin-top: 20px;
`;

const Name = Styled.div`
font-weight: bold;
`;

const Spacer = Styled.div`margin: 5px 0px 10px 0px`;

function ViewerWithTitle({ name, children, ...props }) {
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

ViewerWithTitle.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default ViewerWithTitle;
