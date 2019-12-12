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
  const [adminPromoteModal, setAdminPromoteModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleSuspendModal = () => {
    setSuspendModal(!suspendModal);
  };

  const toggleAdminPromoteModal = () => {
    setAdminPromoteModal(!adminPromoteModal);
  };

  const editButton = () => (
    <div>
      <button type="button" className="icon-button" onClick={toggleEditModal}>
        <img
          src="https://img.icons8.com/windows/32/000000/edit.png"
          alt="edit"
        />
      </button>
    </div>
  );

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
        <button type="button" className="icon-button">
          { suspendIcon }
        </button>
      </div>
    );
  };

  const adminPromoteButton = (isAdmin) => {
    const adminPromoteIcon = isAdmin ? (
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
        <button type="button" className="icon-button" onClick={toggleAdminPromoteModal}>
          { adminPromoteIcon }
        </button>
      </div>
    );
  };

  const buttonsRow = (isSuspended, isAdmin) => (
    <div className="icon-row">
      {editButton()}
      {suspendButton(isSuspended)}
      {adminPromoteButton(isAdmin)}
    </div>
  );

  const userRow = ({
    full_name: fullName,
    created_at: createdAt,
    is_suspended: isSuspended,
    recipes,
    is_admin: isAdmin,
  }) => (
    <tr>
      <td>{fullName}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{recipes.length}</td>
      <td>{buttonsRow(isSuspended, isAdmin)}</td>
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

  console.log('users', users);

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
      <AdminPromoteModal
        adminPromoteModal={adminPromoteModal}
        toggleAdminPromoteModal={toggleAdminPromoteModal}
        selectedUser={{ full_name: "IT'S A ME" }}
        refreshUsers={refreshUsers}
      />
    </Fragment>
  );
};

export default Users;
