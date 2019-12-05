import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, Alert,
} from 'reactstrap';
import './AdminEditModal.scss';
import { adminEditUser } from '../../lib/apiClient';


class AdminEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ alertVisible: false });
  }

  // check if values in the form have changed
  compareUserData = (event) => {
    event.preventDefault();
    const { selectedUser, toggleEditModal, refreshUsers } = this.props;
    const newData = event.target.elements;
    const oldData = selectedUser;

    if (newData.email.value === oldData.email
    && newData.firstName.value === oldData.first_name
    && newData.lastName.value === oldData.last_name) {
      this.setState({ alertVisible: true });
    } else {
      adminEditUser(newData, selectedUser.id).then(() => {
        toggleEditModal();
        refreshUsers();
      });
    }
  }

  render() {
    const {
      editModal, toggleEditModal, selectedUser,
    } = this.props;
    const { alertVisible } = this.state;

    const closeBtn = (
      <button
        type="button"
        className="edit-user-close-button"
        onClick={() => {
          toggleEditModal();
          this.onDismiss();
        }}
      >
        <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
      </button>
    );

    return (
      <div>
        <Modal className="edit-user-modal" isOpen={editModal} backdrop={false}>
          <ModalHeader close={closeBtn}>Edit User Information</ModalHeader>
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
              <Alert className="edit-user-alert" color="warning" isOpen={alertVisible} toggle={this.onDismiss}>
                No information was changed
              </Alert>
              <Button type="submit" className="submit edit-user-save-button">Save</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminEditModal;
