import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

// docs
//https://react-bootstrap.netlify.com/components/modal/

import { Button } from "./SharedStyles";

function InfoModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.ButtonText}
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

InfoModel.propTypes = {
  children: PropTypes.node,
  ButtonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoModel;
