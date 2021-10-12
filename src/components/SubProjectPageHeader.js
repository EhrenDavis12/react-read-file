import React from "react";
import { Fragment } from 'react'
import PropTypes from "prop-types";
import InfoModel from "./InfoModel";
import Link from "./LinkToButton";

function SubProjectPageHeader(props) {
  return (
      <Fragment>
        <InfoModel title="The Challenge" ButtonText="Read The Challenge">
          {props.children}
        </InfoModel>
        <br />
        <Link style={{ margin: "10px 0px 0px 0px" }} to={"/"}>
        All Projects
        </Link>
      </Fragment>
  );
}

SubProjectPageHeader.propTypes = {
  children: PropTypes.node,
};

export default SubProjectPageHeader;
