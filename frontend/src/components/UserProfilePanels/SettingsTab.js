import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './SettingsTab.css';

const SettingsTab = () => (
  <div className="settings-panel">
    <h2>Password Settings</h2>
    <Form>
      <FormGroup>
        <Label for="oldPassword" hidden>Old Password</Label>
        <Input type="password" name="password" id="oldPassword" placeholder="Old Password" />
        <FormText>I forgot my password.</FormText>
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="newPassword" hidden>New Password</Label>
        <Input type="password" name="password" id="newPassword" placeholder="New Password" />
      </FormGroup>
      {' '}
      <Button>Change Password</Button>
    </Form>
  </div>
);

export default SettingsTab;
