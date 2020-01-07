import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.scss';
import { promoteUser } from '../../lib/apiClient';

function AdminPromoteModal(props) {
  const {
    togglePromoteModal, promoteModal, selectedUser, setSelectedUser, refreshUsers,
  } = props;

  const togglePromote = () => {
    const { isAdmin, userId } = selectedUser;
    promoteUser(userId, !isAdmin).then(() => {
      togglePromoteModal();
      refreshUsers();
      setSelectedUser({});
    });
  };

  const closeModal = () => {
    togglePromoteModal();
    setSelectedUser({});
  };

  const closeBtn = (
    <button
      type="button"
      className="promote-user-close-button"
      onClick={closeModal}
    >
      <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
    </button>
  );

  const modalText = (isAdmin) => {
    const textForPromoteUser = 'Clicking "Promote" will promote this user to an administrator. They will have access to ALL administrator functionality in the app, including the ability to suspend users, edit or delete all recipes, and delete comments. If you do not wish to promote this user, close this dialog box.';
    const textForDemoteUser = 'Clicking "Demote" will demote this administrator to a normal user. They will lose access to ALL administrator functionality in the app, including the ability to suspend users, edit or delete all recipes, and delete comments. If you do not wish to demote this user, close this dialog box.';

    return (isAdmin) ? textForDemoteUser : textForPromoteUser;
  };

  return (
    <div>
      <Modal className="promote-user-modal" isOpen={promoteModal} togglePromoteModal={togglePromoteModal} backdrop={false}>
        <ModalHeader togglePromoteModal={togglePromoteModal} close={closeBtn}>
          { selectedUser.isAdmin ? 'Demote to Normal User??' : 'Promote to Administrator?' }
        </ModalHeader>
        <ModalBody>
          { modalText(selectedUser.isAdmin) }
        </ModalBody>
        <ModalFooter>
          <Button className="promote-user-save-button" color="primary" onClick={togglePromote}>
            { selectedUser.isAdmin ? 'Demote' : 'Promote' }
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AdminPromoteModal;
