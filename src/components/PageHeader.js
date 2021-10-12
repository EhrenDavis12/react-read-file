import React from "react";
import PropTypes from "prop-types";
import { ComponentBox } from "../components/SharedStyles";
import { Jumbotron } from "react-bootstrap";
import SubProjectPageHeader from "./SubProjectPageHeader";

function PageHeader(props) {
    return (
        <ComponentBox>
            <Jumbotron>
                <h1>{props.title}</h1>
                <p>{props.subText}</p>
                {props.customHeaders ? (
                    <div>{props.children}</div>
                ) :  (
                    <SubProjectPageHeader>
                        {props.children}
                    </SubProjectPageHeader>)
                }
            </Jumbotron>
        </ComponentBox>
    );
}

PageHeader.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    subText: PropTypes.string,
    customHeaders: PropTypes.bool
};

export default PageHeader;
