import React, { Fragment, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Type } from 'react-bootstrap-table2-editor';
import './AdminTables.css';
import AdminEditModal from '../AdminEditModal/AdminEditModal';
import AdminSuspendModal from '../AdminSuspendModal/AdminSuspendModal';

const Users = ({ users, refreshUsers }) => {
  const [editModal, setEditModal] = useState(false);
  const [suspendModal, setSuspendModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleSuspendModal = () => {
    setSuspendModal(!suspendModal);
  };

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
      dataField: 'is_suspended',
      text: '',
      headerStyle: {
        textAlign: 'center',
        borderTop: 'none',
        borderBottom: 'none',
      },
      align: 'left',
      formatter: (cell) => {
        if (cell) {
          return (
            <div>
              <button type="button" className="admin-edit-button" onClick={toggleEditModal}>
                <img
                  src="https://img.icons8.com/windows/32/000000/edit.png"
                  alt="edit"
                />
              </button>
              <button type="button" className="admin-suspend-button">
                <img
                  src="https://img.icons8.com/ios/25/000000/cancel-2-filled.png"
                  alt="user currently suspended"
                />
              </button>
            </div>
          );
        }
        return (
          <div>
            <button type="button" className="admin-edit-button" onClick={toggleEditModal}>
              <img
                src="https://img.icons8.com/windows/32/000000/edit.png"
                alt="edit"
              />
            </button>
            <button type="button" className="admin-suspend-button" onClick={toggleSuspendModal}>
              <img
                src="https://img.icons8.com/windows/32/000000/cancel.png"
                alt="suspend user"
              />
            </button>
          </div>
        );
      },
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
      setSelectedUser(users[rowIndex]);
    },
  };

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
      <AdminEditModal
        editModal={editModal}
        toggleEditModal={toggleEditModal}
        selectedUser={selectedUser}
        refreshUsers={refreshUsers}
      />
      <AdminSuspendModal
        suspendModal={suspendModal}
        toggleSuspendModal={toggleSuspendModal}
        selectedUser={selectedUser}
        refreshUsers={refreshUsers}
      />
    </Fragment>
  );
};

export default Users;
