import React, { Component, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Type } from 'react-bootstrap-table2-editor';
import './AdminTables.css';
import AdminModal from '../AdminModal/AdminModal';
import AdminSuspendModal from '../AdminModal/AdminSuspendModal';

// add selectedUser to state which will update based on rowEvents click
// then the modal will open on button click, and can access selected user in state

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      suspendModal: false,
      selectedUser: {},
    };
    this.toggle = this.toggle.bind(this);
    this.toggleSuspendModal = this.toggleSuspendModal.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  toggleSuspendModal() {
    this.setState(prevState => ({
      suspendModal: !prevState.suspendModal,
    }));
  }

  render() {
    const { users } = this.props;
    const columns = [
      {
        dataField: 'inStock', // name?
        text: '',
        headerStyle: {
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: {
          paddingLeft: '10px',
        },
        formatter: (_cellContent, row) => (
          <div className="checkbox">
            <label htmlFor="adminCheckbox" className="admin-checkbox-container user-checkbox-spacing">
              <input type="checkbox" id="adminCheckbox" checked={row.inStock} />
              <span className="admin-table-checkmark" />
            </label>
          </div>
        ),
      },
      {
        dataField: 'full_name',
        text: 'User Name',
        style: { textAlign: 'center' },
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
      },
      {
        dataField: 'created_at',
        text: 'Member Since',
        style: { textAlign: 'center' },
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        formatter: (cell) => {
          let dateObj = cell;
          if (typeof cell !== 'object') {
            dateObj = new Date(cell);
          }

          const day = `0${dateObj.getUTCDate()}`.slice(-2);
          const month = `0${dateObj.getUTCMonth() + 1}`;
          const year = dateObj.getUTCFullYear();
          return `${month}/${day}/${year}`;
        },
        editor: {
          type: Type.DATE,
        },
      },
      {
        dataField: 'recipes',
        text: 'Number Of Recipes',
        align: 'center',
        style: {
          paddingRight: '80px',
        },
        headerStyle: {
          paddingRight: '80px',
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        formatter: cell => `${cell.length}`,
      },
      {
        dataField: 'edit',
        text: '',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        align: 'left',
        formatter: () => (
          <div>
            <button type="button" className="admin-edit-button" onClick={this.toggle}>
              <img
                src="https://img.icons8.com/windows/32/000000/edit.png"
                alt="edit"
              />
            </button>
            <button type="button" className="admin-edit-button" onClick={this.toggleSuspendModal}>
              <img
                src="https://img.icons8.com/windows/32/000000/cancel.png"
                alt="delete"
              />
            </button>
            <button type="button" className="admin-edit-button suspend-button">
              <img
                src="https://img.icons8.com/ios/25/000000/cancel-2-filled.png"
                alt="user currently suspended"
              />
            </button>
          </div>
        ),
      },
    ];

    const options = {
      hideSizePerPage: true,
      sizePerPageList: [
        {
          text: '5',
          value: 20,
        },
        {
          text: 'All',
          value: users.length,
        },
      ],
    };

    // This is a react-bootstrap-table2 way of
    // getting the row index, which we use to get
    // the corresponding user data
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        this.setState({
          selectedUser: users[rowIndex],
        });
      },
    };

    const { modal, suspendModal, selectedUser } = this.state;

    return (
      <Fragment>
        <h1 className="admin-users-title">Admin Dashboard</h1>
        <BootstrapTable
          keyField="id"
          data={users}
          columns={columns}
          rowEvents={rowEvents}
          bordered={false}
          pagination={paginationFactory(options)}
        />
        <AdminModal modal={modal} toggle={this.toggle} selectedUser={selectedUser} />
        <AdminSuspendModal suspendModal={suspendModal} toggleSuspendModal={this.toggleSuspendModal} selectedUser={selectedUser} />
      </Fragment>
    );
  }
}

export default Users;
