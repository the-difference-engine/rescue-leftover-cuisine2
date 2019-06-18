import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input,
} from 'reactstrap';
import './AdminEditModal.css';

class AdminEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: this.props.selectedUser,
    };
  }

  compareUserData = (event) => {
    event.preventDefault();
    console.log('submit clicked');
    console.log(event.target[0].value);
    console.log(event.target.elements.email.value);
  }

  render() {
    const {
      editModal, toggleEditModal, selectedUser,
    } = this.props;

    const closeBtn = <button type="button" className="edit-user-close-button" onClick={toggleEditModal}><img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" /></button>;

    return (
      <div>
        <Modal className="edit-user-modal" isOpen={editModal} toggle={toggleEditModal} backdrop={false}>
          <ModalHeader toggle={toggleEditModal} close={closeBtn}>Edit User Information</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.compareUserData}>
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
              <Button type="submit" className="submit edit-user-save-button" onClick={toggleEditModal}>Save</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminEditModal;
