import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './AdminSuspendModal.css';

class AdminSuspendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggle, suspendModal } = this.props;

    const closeBtn = <button type="button" className="suspend-user-close-button" onClick={toggle}><img src="https://img.icons8.com/windows/32/9b9b9b/cancel.png" alt="close" /></button>;

    return (
      <div>
        <Modal isOpen={suspendModal} toggle={toggle} backdrop={false}>
          <ModalHeader toggle={toggle} close={closeBtn}>Suspend User?</ModalHeader>
          <ModalBody>
            Clicking &quot;Suspended&quot; will prevent the user from logging into the app using any features available to registered users. The user will remain suspended until this status is removed by an administrator.

              If you do not wish to suspend the user, close this dialog box.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Suspend
            </Button>
          </ModalFooter>

          {console.log('inside AdminSuspendModal.js')}
        </Modal>
      </div>
    );
  }
}

export default AdminSuspendModal;
