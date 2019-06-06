import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

class AdminModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      modal, toggle, selectedUser, className,
    } = this.props;
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} charCode="X">Edit User</ModalHeader>
          <ModalBody>
            <p>
              First Name:
              {selectedUser.first_name}
            </p>
            <p>
              Last Name:
              {selectedUser.last_name}
            </p>
            <p>
              Email:
              {selectedUser.email}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminModal;
