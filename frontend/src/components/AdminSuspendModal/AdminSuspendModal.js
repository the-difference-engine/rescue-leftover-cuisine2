import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.css';
import { suspendUser } from '../../lib/apiClient';

function AdminSuspendModal(props) {
  const {
    toggleSuspendModal, suspendModal, selectedUser, refreshUsers,
  } = props;

  const handleSuspend = () => {
    suspendUser(selectedUser.id, !selectedUser.is_suspended).then(() => {
      toggleSuspendModal();
      refreshUsers();
    });
  };

  const closeBtn = (
    <button
      type="button"
      className="suspend-user-close-button"
      onClick={toggleSuspendModal}
    >
      <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
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

export default AdminSuspendModal;
