import React from "react";
import PropTypes from "prop-types";
import { ComponentBox } from "../components/SharedStyles";
import { Jumbotron } from "react-bootstrap";

function Link(props) {
  return (
    <ComponentBox>
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>{props.subText}</p>
        {props.children}
      </Jumbotron>
    </ComponentBox>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string
};

export default Link;
