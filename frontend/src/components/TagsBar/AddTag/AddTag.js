import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, Alert,
} from 'reactstrap';
import includes from 'lodash/includes';
import './AddTag.css';

const AddTag = (allTags) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const onDismiss = () => {
    setAlertVisible(false);
  };


  const createTag = (event) => {
    event.preventDefault();
    const newData = event.target.elements;
    const allTagsForRecipe = allTags;

    if (includes(allTagsForRecipe, newData.tag.value)) {
      setAlertVisible(true);
    } else {
      // createTagForRecipe(newData, selectedRecipe.id).then(() => {
      //   toggleEditModal();
      //   refreshTags();
      // });
      setEditModal(false);
      // refreshTags();
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
      <div id="create-tag-text">
        Add Tag
        <div id="create-tag-icon" onClick={setEditModal}>+</div>
      </div>
      <Modal className="create-tag-text" isOpen={editModal} backdrop={false}>
        <ModalHeader close={closeBtn}>Add Tag</ModalHeader>
        <ModalBody>
          <Form method="post" action="/create_tag" onSubmit={createTag}>
            <FormGroup row>
              <Label for="tag" sm={4}>Tag</Label>
              <Col sm={8}>
                <Input type="text" name="tag" id="tag" />
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
