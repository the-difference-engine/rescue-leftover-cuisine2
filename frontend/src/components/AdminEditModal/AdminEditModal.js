import React from 'react';
import {
<<<<<<< HEAD
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input,
} from 'reactstrap';
import './AdminEditModal.css';
=======
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, Alert,
} from 'reactstrap';
import './AdminEditModal.css';
import { adminEditUser } from '../../lib/apiClient';

>>>>>>> a35cb36b6114fe69f880f8dd73032fece6b1dd72

class AdminEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      // userData: this.props.selectedUser,
    };
  }

  compareUserData = (event) => {
    event.preventDefault();
    console.log('submit clicked');
    console.log(event.target[0].value);
    console.log(event.target.elements.email.value);
=======
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
>>>>>>> a35cb36b6114fe69f880f8dd73032fece6b1dd72
  }

  render() {
    const {
      editModal, toggleEditModal, selectedUser,
    } = this.props;
<<<<<<< HEAD

    const closeBtn = <button type="button" className="edit-user-close-button" onClick={toggleEditModal}><img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" /></button>;

    return (
      <div>
        <Modal className="edit-user-modal" isOpen={editModal} toggle={toggleEditModal} backdrop={false}>
          <ModalHeader toggle={toggleEditModal} close={closeBtn}>Edit User Information</ModalHeader>
=======
    const { alertVisible } = this.state;

    const handleClose = () => {
      toggleEditModal();
      this.onDismiss();
    };

    const closeBtn = (
      <button type="button" className="edit-user-close-button" onClick={handleClose}>
        <img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" />
      </button>
    );

    return (
      <div>
        <Modal className="edit-user-modal" isOpen={editModal} backdrop={false}>
          <ModalHeader close={closeBtn}>Edit User Information</ModalHeader>
>>>>>>> a35cb36b6114fe69f880f8dd73032fece6b1dd72
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
<<<<<<< HEAD
              <Button type="submit" className="submit edit-user-save-button" onClick={toggleEditModal}>Save</Button>
=======
              <Alert className="edit-user-alert" color="warning" isOpen={alertVisible} toggle={this.onDismiss}>
                No information was changed
              </Alert>
              <Button type="submit" className="submit edit-user-save-button">Save</Button>
>>>>>>> a35cb36b6114fe69f880f8dd73032fece6b1dd72
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AdminEditModal;
