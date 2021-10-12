import React from "react";
import PropTypes from "prop-types";
import { ComponentBox } from "../components/SharedStyles";
import { Jumbotron } from "react-bootstrap";
import InfoModel from "./InfoModel";
import Link from "./LinkToButton";

function PageHeader(props) {
  return (
    <ComponentBox>
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>{props.subText}</p>
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
            {props.children}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
            All Projects
        </Link>
      </Jumbotron>
    </ComponentBox>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string
};

export default PageHeader;
