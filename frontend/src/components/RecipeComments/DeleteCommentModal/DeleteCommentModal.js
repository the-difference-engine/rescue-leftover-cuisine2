import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './DeleteCommentModal.css';
import { deleteComment } from '../../../lib/apiClient';

function DeleteCommentModal(props) {
  const {
    toggleDeleteModal, deleteModal, recipeId, reloadComments, currentComment,
  } = props;

  const removeComment = async () => {
    await deleteComment(recipeId, currentComment);
    reloadComments();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    removeComment();
    toggleDeleteModal();
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
      <Modal className="suspend-user-modal" isOpen={deleteModal} backdrop={false}>
        <ModalHeader close={closeBtn}>
          Delete Comment?
        </ModalHeader>
        <ModalBody>
          Clicking &quot;Delete&quot; will permanently delete this comment from the database.

            If you do not wish to delete this comment, close this dialog box.
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
