import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input,
} from 'reactstrap';
// import './AdminModal.css';

class AdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      modal, toggle, selectedUser,
    } = this.props;

    const closeBtn = <button type="button" className="edit-user-close-button" onClick={toggle}><img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" /></button>;

    return (
      <div>
        <Modal className="edit-user-modal" isOpen={modal} toggle={toggle} backdrop={false}>
          <ModalHeader toggle={toggle} close={closeBtn}>Edit User Information</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="firstName" sm={4}>First Name</Label>
                <Col sm={8}>
                  <Input type="text" name="text" id="firstName" defaultValue={selectedUser.first_name} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="lastName" sm={4}>Last Name</Label>
                <Col sm={8}>
                  <Input type="text" name="text" id="lastName" defaultValue={selectedUser.last_name} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="email" name="email" id="email" defaultValue={selectedUser.email} />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="edit-user-save-button" onClick={toggle}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminModal;
