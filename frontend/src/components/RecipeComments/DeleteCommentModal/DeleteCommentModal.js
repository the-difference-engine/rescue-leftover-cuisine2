import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './DeleteCommentModal.css';
import { deleteComment } from '../../../lib/apiClient';

function DeleteCommentModal(props) {
  const {
    toggleDeleteModal, deleteModal, recipeId, reloadComments,
  } = props;

  //   const handleSuspend = () => {
  //     suspendUser(selectedUser.id, !selectedUser.is_suspended).then(() => {
  //       toggleSuspendModal();
  //       refreshUsers();
  //     });
  //   };

  const removeComment = async () => {
    console.log();
    await deleteComment(recipeId);
    reloadComments();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    removeComment();
  };

  const closeBtn = (
    <button
      type="button"
      className="suspend-user-close-button"
      onClick={toggleDeleteModal}
    >
      <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
    </button>
  );

  return (
    <div>
      <Modal className="suspend-user-modal" isOpen={deleteModal} toggleDeleteModal={toggleDeleteModal} backdrop={false}>
        <ModalHeader toggleDelete={toggleDeleteModal} close={closeBtn}>
          Delete Comment?
        </ModalHeader>
        <ModalBody>
          Clicking &quot;Suspended&quot; will prevent the user from logging into the app.

            The user will remain suspended until this status is removed by an administrator.

            If you do not wish to suspend the user, close this dialog box.
        </ModalBody>
        <ModalFooter>
          <Button className="suspend-user-save-button" color="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteCommentModal;
