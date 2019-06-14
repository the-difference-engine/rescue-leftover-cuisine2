import React from 'react';
// import {
//   Button, Modal, ModalHeader, ModalBody, ModalFooter, toggle,
// } from 'reactstrap';
import './AdminSuspendModal.css';

class AdminSuspendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Suspend User?</h1>
        <p>
          Clicking &quot;Suspended&quot; will prevent the user from logging into the app using any features available to registered users. The user will remain suspended until this status is removed by an administrator.
        </p>
        <p>
          If you do not wish to suspend the user, close this dialog box.
        </p>
      </div>
    );
  }
}

export default AdminSuspendModal;
