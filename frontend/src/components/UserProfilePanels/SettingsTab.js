import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './SettingsTab.scss';
import { resetPassword } from '../../lib/apiClient';

const SettingsTab = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [pwordVisible, setPwordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      resetPassword(currentPassword, newPassword);
    }
  };

  return (
    <div className="settings-panel" id="settings">
      <h2>Password Settings</h2>
      <Form>
        <FormGroup>
          <Label for="oldPassword" hidden>Old Password</Label>
          <Input type={pwordVisible ? 'text' : 'password'} value={currentPassword} name="current-password" id="oldPassword" placeholder="Old Password" onChange={e => setCurrentPassword(e.target.value)} />
          <span
            className={pwordVisible ? 'fas fa-eye-slash fa-lg pword-vis' : 'fas fa-eye fa-lg pword-vis'}
            onClick={() => setPwordVisible(!pwordVisible)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPassword" hidden>New Password</Label>
          <Input type={pwordVisible ? 'text' : 'password'} value={newPassword} name="new-password" id="newPassword" placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
          <span
            className={pwordVisible ? 'fas fa-eye-slash fa-lg pword-vis' : 'fas fa-eye fa-lg pword-vis'}
            onClick={() => setPwordVisible(!pwordVisible)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword" hidden>Confirm New Password</Label>
          <Input type={pwordVisible ? 'text' : 'password'} value={confirmPassword} name="confirm-password" id="confirmPassword" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
          <span
            className={pwordVisible ? 'fas fa-eye-slash fa-lg pword-vis' : 'fas fa-eye fa-lg pword-vis'}
            onClick={() => setPwordVisible(!pwordVisible)}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Change Password</Button>
      </Form>
    </div>
  );
};

export default SettingsTab;
