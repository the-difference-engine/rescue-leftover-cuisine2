import React from 'react';
import './AdminSuspendModal.css';

class AdminSuspendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const {
    // } = this.props;

    return (
      <div className="suspend">
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
