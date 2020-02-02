import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { ComponentBox, Styled } from "../components/SharedStyles";
import Link from "../components/LinkToButton";

const ComponentBoxLargeMargin = Styled(ComponentBox)`
  margin: 10px 10px 0px 10px;
  width: 350px;
`;

function GetNumColumns({
  title = "Title Here",
  description = "Some Text Here",
  buttonText = "Go to Project",
  to = "/",
  footerText = ""
}) {
  return (
    <ComponentBoxLargeMargin>
      <Card>
        {/* <Card.Header as="h5">{title}</Card.Header> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={to}>{buttonText}</Link>
        </Card.Body>
        <Card.Footer className="text-muted">{footerText}</Card.Footer>
      </Card>
    </ComponentBoxLargeMargin>
  );
}

GetNumColumns.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired
};

export default GetNumColumns;
