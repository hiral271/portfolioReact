import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ListGroup, ListGroupItem } from 'reactstrap';


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} size="lg" >Contact Information</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><span role="img" aria-label="sheep">👌</span></ModalHeader>
        <ModalBody>
        <div>
      <h3>Hiral Mohan Patel </h3>
      <p>you can find  <strong> <code>me  </code> here</strong>.</p>
      <ListGroup>
        <ListGroupItem active tag="a" href="https://hiral271.github.io/Day-planer/" action>GitHub</ListGroupItem>
        <ListGroupItem tag="a" href="https://www.linkedin.com/in/hiral-mohan-patel-203485203/" action>LinkId  Link</ListGroupItem>
        <ListGroupItem tag="a" href="https://docs.google.com/document/d/1wLeclfn0W0U1L16kTMKDv_mXKndFjPrh/edit" action>Resume-Link </ListGroupItem>
        <ListGroupItem >Phone: 609-955-4870</ListGroupItem>
      </ListGroup>
      <p />
      
    </div>

        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={toggle} target="_blank" href="/about" > About Me
       
        </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
       
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;