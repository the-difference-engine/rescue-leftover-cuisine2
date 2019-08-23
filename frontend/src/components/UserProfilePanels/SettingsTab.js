import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './SettingsTab.css';
import { resetCurrentUserPassword } from '../../lib/apiClient';

const SettingsTab = () => {
  const [newPassword, setNewPassword] = useState();
  const [currentPassword, setCurrentPassword] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    resetCurrentUserPassword(currentPassword, newPassword);
  };

  return (

    <div className="settings-panel">
      <h2>Password Settings</h2>
      <Form>
        <FormGroup>
          <Label for="oldPassword" hidden>Old Password</Label>
          <Input type="password" value={currentPassword} name="password" id="oldPassword" placeholder="Old Password" onChange={e => setCurrentPassword(e.target.value)} />
          <FormText>I forgot my password.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="newPassword" hidden>New Password</Label>
          <Input type="password" value={newPassword} name="password" id="newPassword" placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
        </FormGroup>
        <Button onClick={handleSubmit}>Change Password </Button>
      </Form>
    </div>
  );
};


export default SettingsTab;
