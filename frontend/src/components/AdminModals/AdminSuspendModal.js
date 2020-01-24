import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.scss';
import { suspendUser } from '../../lib/apiClient';

function AdminSuspendModal(props) {
  const {
    toggleSuspendModal, suspendModal, selectedUser, setSelectedUser, refreshUsers,
  } = props;

  const toggleSuspend = () => {
    const { isSuspended, userId } = selectedUser;
    suspendUser(userId, !isSuspended).then(() => {
      toggleSuspendModal();
      refreshUsers();
      setSelectedUser({});
    });
  };

  const closeModal = () => {
    toggleSuspendModal();
    setSelectedUser({});
  };

  const closeBtn = (
    <button
      type="button"
      className="suspend-user-close-button"
      onClick={closeModal}
    >
      <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
    </button>
  );

  const modalText = (isSuspended) => {
    const textForSuspendedUser = 'Clicking "UnSuspend" will allow the user to logging into the app. The user will remain unsuspended until this status is removed by an administrator. If you do not wish to unsuspend the user, close this dialog box.';
    const textForActiveUser = 'Clicking "Suspend" will prevent the user from logging into the app. The user will remain suspended until this status is removed by an administrator. If you do not wish to suspend the user, close this dialog box.';
    return (isSuspended) ? textForSuspendedUser : textForActiveUser;
  };

  return (
    <div>
      <Modal className="suspend-user-modal" isOpen={suspendModal} toggleSuspendModal={toggleSuspendModal} backdrop={false}>
        <ModalHeader toggleSuspendModal={toggleSuspendModal} close={closeBtn}>
          { selectedUser.isSuspended ? 'Unsuspend User?' : 'Suspend User?' }
        </ModalHeader>
        <ModalBody>
          { modalText(selectedUser.isSuspended) }
        </ModalBody>
        <ModalFooter>
          <Button className="suspend-user-save-button" color="primary" onClick={toggleSuspend}>
            { selectedUser.isSuspended ? 'Unsuspend' : 'Suspend' }
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AdminSuspendModal;
