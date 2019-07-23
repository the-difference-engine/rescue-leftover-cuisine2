import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.css';
// import { suspendUser } from '../../lib/apiClient';

class AdminSuspendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      toggleSuspendModal, suspendModal,
    } = this.props;

    // const {
    //   toggleSuspendModal, suspendModal, selectedUser, refreshUsers,
    // } = this.props;

    const handleSuspend = () => {
      // suspendUser(selectedUser, selectedUser.id).then(() => {
      //   toggleSuspendModal();
      //   refreshUsers();
      // });
      console.log('Starting user suspension');
    };

    const closeBtn = (
      <button
        type="button"
        className="suspend-user-close-button"
        onClick={toggleSuspendModal}
      >
        <img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" />
      </button>
    );

    return (
      <div>
        <Modal className="suspend-user-modal" isOpen={suspendModal} toggleSuspendModal={toggleSuspendModal} backdrop={false}>
          <ModalHeader toggleSuspendModal={toggleSuspendModal} close={closeBtn}>
            Suspend User?
          </ModalHeader>
          <ModalBody>
            Clicking &quot;Suspended&quot; will prevent the user from logging into the app.

              The user will remain suspended until this status is removed by an administrator.

              If you do not wish to suspend the user, close this dialog box.
          </ModalBody>
          <ModalFooter>
            <Button className="suspend-user-save-button" color="primary" onClick={handleSuspend}>
              Suspend
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminSuspendModal;
