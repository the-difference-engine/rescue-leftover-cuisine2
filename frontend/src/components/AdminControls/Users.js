import map from 'lodash/map';
import React, { Fragment, useState } from 'react';
import AdminEditModal from '../AdminModals/AdminEditModal';
import AdminSuspendModal from '../AdminModals/AdminSuspendModal';
import AdminPromoteModal from '../AdminModals/AdminPromoteModal';
import PaginatedTable from './PaginatedTable';
import { formatDate } from '../../lib/utilities';
import './AdminTables.scss';

const Users = ({ users, refreshUsers }) => {
  const [editModal, setEditModal] = useState(false);
  const [suspendModal, setSuspendModal] = useState(false);
  const [promoteModal, setPromoteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleSuspendModal = () => {
    setSuspendModal(!suspendModal);
  };

  const togglePromoteModal = () => {
    setPromoteModal(!promoteModal);
  };

  const handlePromote = (userId, isAdmin) => {
    setSelectedUser({ userId, isAdmin });
    togglePromoteModal();
  };

  const handleSuspend = (userId, isSuspended) => {
    setSelectedUser({ userId, isSuspended });
    toggleSuspendModal();
  };

  const handleEdit = (userId, firstName, lastName, email) => {
    setSelectedUser({
      userId,
      firstName,
      lastName,
      email,
    });
    toggleEditModal();
  };

  const editButton = (userId, firstName, lastName, email) => (
    <div>
      <button type="button" className="icon-button" onClick={() => handleEdit(userId, firstName, lastName, email)}>
        <img
          src="https://img.icons8.com/windows/32/000000/edit.png"
          alt="edit"
        />
      </button>
    </div>
  );

  const suspendButton = (userId, isSuspended) => {
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
        <button type="button" className="icon-button" onClick={() => handleSuspend(userId, isSuspended)}>
          { suspendIcon }
        </button>
      </div>
    );
  };

  const promoteButton = (userId, isAdmin) => {
    const promoteIcon = isAdmin ? (
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/down3.png"
        alt="user has an admin status"
      />
    ) : (
      <img
        src="https://img.icons8.com/material-rounded/24/000000/level-up.png"
        alt="promote admin status to user"
      />
    );

    return (
      <div>
        <button type="button" className="icon-button" onClick={() => handlePromote(userId, isAdmin)}>
          { promoteIcon }
        </button>
      </div>
    );
  };

  const buttonsRow = (userId, isSuspended, isAdmin, firstName, lastName, email) => (
    <div className="icon-row">
      {editButton(userId, firstName, lastName, email)}
      {suspendButton(userId, isSuspended)}
      {promoteButton(userId, isAdmin)}
    </div>
  );

  const userRow = ({
    id: userId,
    full_name: fullName,
    created_at: createdAt,
    is_suspended: isSuspended,
    recipes,
    is_admin: isAdmin,
    email,
    first_name: firstName,
    last_name: lastName,
  }) => (
    <tr>
      <td>{fullName}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{recipes.length}</td>
      <td>{buttonsRow(userId, isSuspended, isAdmin, firstName, lastName, email)}</td>
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
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        refreshUsers={refreshUsers}
      />
      <AdminSuspendModal
        suspendModal={suspendModal}
        toggleSuspendModal={toggleSuspendModal}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        refreshUsers={refreshUsers}
      />
      <AdminPromoteModal
        promoteModal={promoteModal}
        togglePromoteModal={togglePromoteModal}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        refreshUsers={refreshUsers}
      />
      <AdminPromoteModal
        promoteModal={promoteModal}
        togglePromoteModal={togglePromoteModal}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        refreshUsers={refreshUsers}
      />
    </Fragment>
  );
};

export default Users;
