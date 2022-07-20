import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function CenteredModal(props) {
 
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 className="card-name">{props.item.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Date of Birth: <span>{props.item.dob}</span>
          </h6>
          <h6>
            Age: <span>{props.item.age}</span>
          </h6>
          <h6>
            Year of Death: <span>{props.item.died}</span>
          </h6>
          <p>{props.item.description}</p>
          <h6>
            Year of Death: <span>{props.item.died}</span>
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CenteredModal;
