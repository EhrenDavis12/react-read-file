import React from "react";
import PropTypes from "prop-types";
import { Link as link } from "react-router-dom";
import { Styled } from "../components/SharedStyles";

const LinkStyled = Styled(link)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
`;

function Link(props) {
  return (
    <LinkStyled className="sc-htpNat dVDLPk btn btn btn-primary" {...props}>
      {props.children}
    </LinkStyled>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired
};

export default Link;
