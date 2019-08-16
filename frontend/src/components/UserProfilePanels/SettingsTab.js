import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './SettingsTab.css';
import { resetLoginPassword } from '../../lib/apiClient';

const SettingsTab = ({ user }) => {
  const [newPassword, setPassword] = useState();
  const handleChange = event => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('password:', newPassword); // eslint no-console
    resetLoginPassword({ password: user.newPassword });
  };

  return (

    <div className="settings-panel">
      <h2>Password Settings</h2>
      <Form>
        <FormGroup>
          <Label for="oldPassword" hidden>Old Password</Label>
          <Input type="password" name="password" id="oldPassword" placeholder="Old Password" />
          <FormText>I forgot my password.</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="newPassword" hidden>New Password</Label>
          <Input type="password" value={newPassword} name="password" id="newPassword" placeholder="New Password" onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSubmit}>Change Password </Button>
      </Form>
    </div>
  );
};


export default SettingsTab;
