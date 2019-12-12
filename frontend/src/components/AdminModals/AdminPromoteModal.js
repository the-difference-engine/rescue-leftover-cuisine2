import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.scss';
// import { promoteUser } from '../../lib/apiClient';

function AdminPromoteModal(props) {
  const {
    toggleAdminPromoteModal, adminPromoteModal, selectedUser, refreshUsers,
  } = props;

  const togglePromote = () => {
    toggleAdminPromoteModal();
    refreshUsers();
    // promoteUser(selectedUser.id, !selectedUser.is_admin).then(() => {
    //   toggleAdminPromoteModal();
    //   refreshUsers();
    // });
  };

  const closeBtn = (
    <button
      type="button"
      className="suspend-user-close-button"
      onClick={toggleAdminPromoteModal}
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
      <Modal className="suspend-user-modal" isOpen={adminPromoteModal} toggleSuspendModal={toggleAdminPromoteModal} backdrop={false}>
        <ModalHeader toggleSuspendModal={toggleAdminPromoteModal} close={closeBtn}>
          { selectedUser.is_admin ? 'Demote to Normal User??' : 'Promote to Administrator?' }
        </ModalHeader>
        <ModalBody>
          { modalText(selectedUser.is_admin) }
        </ModalBody>
        <ModalFooter>
          <Button className="promote-user-save-button" color="primary" onClick={togglePromote}>
            { selectedUser.is_admin ? 'Promote' : 'Demote' }
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AdminPromoteModal;
