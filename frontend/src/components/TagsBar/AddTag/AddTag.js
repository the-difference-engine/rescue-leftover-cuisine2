import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, Alert,
} from 'reactstrap';
import includes from 'lodash/includes';
import './AddTag.css';

const AddTag = (selectedRecipe, refreshTags) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const onDismiss = () => {
    setAlertVisible(false);
  };

  const createTag = (event) => {
    event.preventDefault();
    const newData = event.target.elements;
    const allTagsForRecipe = ['dinner', 'healthy']; // dummy data

    if (includes(allTagsForRecipe, newData.tag.value)) {
      setAlertVisible(true);
    } else {
      // createTagForRecipe(newData, selectedRecipe.id).then(() => {
      //   toggleEditModal();
      //   refreshTags();
      // });
      setEditModal(false);
      refreshTags();
    }
  };

  const closeBtn = (
    <button
      type="button"
      className="edit-tag-close-button"
      onClick={() => {
        setEditModal(false);
        onDismiss();
      }}
    >
      <img src="https://img.icons8.com/windows/32/000000/cancel.png" alt="close" />
    </button>
  );

  return (
    <div id="create-tag-container">
      <button type="button" id="create-tag-text" onClick={setEditModal}>
      Add Tag
        <div id="create-tag-icon">+</div>
      </button>
      <Modal className="create-tag-text" isOpen={editModal} backdrop={false}>
        <ModalHeader close={closeBtn}>Add Tag</ModalHeader>
        <ModalBody>
          <Form onSubmit={createTag}>
            <FormGroup row>
              <Label for="tag" sm={4}>Tag</Label>
              <Col sm={8}>
                <Input type="tag" name="tag" id="tag" />
              </Col>
            </FormGroup>
            <Alert className="create-tag-alert" color="warning" isOpen={alertVisible} toggle={onDismiss}>
              Tag already exists.
            </Alert>
            <Button type="submit" className="submit edit-user-save-button">Save</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddTag;
