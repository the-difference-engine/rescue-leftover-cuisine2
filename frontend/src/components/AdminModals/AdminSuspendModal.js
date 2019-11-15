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

  const toggleSuspend = () => {
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

  const toggleSuspendText = (isSuspended) => {
    const textForSuspendedUser = 'Clicking "UnSuspend" will allow the user to logging into the app.'
    + 'The user will remain unsuspended until this status is removed by an administrator.'
    + 'If you do not wish to unsuspend the user, close this dialog box.';
    const textForActiveUser = 'Clicking "Suspend" will prevent the user from logging into the app.'
    + 'The user will remain suspended until this status is removed by an administrator.'
    + 'If you do not wish to suspend the user, close this dialog box.';
    return (isSuspended) ? textForSuspendedUser : textForActiveUser;
  };

  return (
    <div>
      <Modal className="suspend-user-modal" isOpen={suspendModal} toggleSuspendModal={toggleSuspendModal} backdrop={false}>
        <ModalHeader toggleSuspendModal={toggleSuspendModal} close={closeBtn}>
          { selectedUser.is_suspended ? 'Unsuspend User?' : 'Suspend User?' }
        </ModalHeader>
        <ModalBody>
          { toggleSuspendText(selectedUser.is_suspended) }
        </ModalBody>
        <ModalFooter>
          <Button className="suspend-user-save-button" color="primary" onClick={toggleSuspend}>
            { selectedUser.is_suspended ? 'Unsuspend' : 'Suspend' }
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AdminSuspendModal;
