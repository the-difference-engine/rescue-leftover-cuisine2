import map from 'lodash/map';
import React, { Fragment, useState } from 'react';
import AdminEditModal from '../AdminModals/AdminEditModal';
import AdminSuspendModal from '../AdminModals/AdminSuspendModal';
import PaginatedTable from './PaginatedTable';
import './AdminTables.scss';

const Users = ({ users, refreshUsers }) => {
  const [editModal, setEditModal] = useState(false);
  const [suspendModal, setSuspendModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleSuspendModal = () => {
    setSuspendModal(!suspendModal);
  };

  const formatDate = (dateString) => {
    const prependZero = n => (n < 10 ? `0${n}` : n);
    const date = new Date(dateString);

    const day = prependZero(date.getDate());
    const month = prependZero(date.getMonth() + 1);

    return `${month}/${day}/${date.getFullYear()}`;
  };

  const suspendButton = (isSuspended) => {
    const suspendIcon = isSuspended ? (
      <img
        src="https://img.icons8.com/ios/25/000000/cancel-2-filled.png"
        alt="user currently suspended"
      />
    ) : (
      <img
        src="https://img.icons8.com/windows/32/000000/cancel.png"
        alt="suspend user"
      />
    );

    return (
      <div>
        <button type="button" className="admin-edit-button" onClick={toggleEditModal}>
          <img
            src="https://img.icons8.com/windows/32/000000/edit.png"
            alt="edit"
          />
        </button>
        <button type="button" className="admin-suspend-button">
          { suspendIcon }
        </button>
      </div>
    );
  };

  const userRow = ({
    full_name: fullName,
    created_at: createdAt,
    is_suspended: isSuspended,
    recipes,
  }) => (
    <tr>
      <td>{fullName}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{recipes.length}</td>
      <td>{suspendButton(isSuspended)}</td>
    </tr>
  );

  const headerRow = (
    <tr>
      <th>User Name</th>
      <th>Member Since</th>
      <th>Number of Recipes</th>
      <th />
    </tr>
  );

  return (
    <Fragment>
      <h1 className="admin-users-title">Admin Dashboard</h1>
      <PaginatedTable bodyRows={map(users, userRow)} headerRow={headerRow} />
      <AdminEditModal
        editModal={editModal}
        toggleEditModal={toggleEditModal}
        selectedUser={{ full_name: "IT'S A ME" }}
        refreshUsers={refreshUsers}
      />
      <AdminSuspendModal
        suspendModal={suspendModal}
        toggleSuspendModal={toggleSuspendModal}
        selectedUser={{ full_name: "IT'S A ME" }}
        refreshUsers={refreshUsers}
      />
    </Fragment>
  );
};

export default Users;
