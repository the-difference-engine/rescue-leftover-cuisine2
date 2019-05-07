import React, { Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Type } from 'react-bootstrap-table2-editor';
import './AdminTables.css';

const Users = ({ users }) => {
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
      style: { textAlign: 'center' },
      headerStyle: {
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
      style: { textAlign: 'center' },
      formatter: () => (
        <div>
          <button type="button" className="admin-edit-button">
            <img
              src="https://img.icons8.com/windows/32/000000/edit.png"
              alt="edit"
            />
          </button>
          <button type="button" className="admin-edit-button">
            <img
              src="https://img.icons8.com/windows/32/000000/cancel.png"
              alt="delete"
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

  return (
    <Fragment>
      <h1 className="admin-users-title">Admin Dashboard</h1>
      <BootstrapTable
        keyField="id"
        data={users}
        columns={columns}
        bordered={false}
        pagination={paginationFactory(options)}
      />
    </Fragment>
  );
};

export default Users;
