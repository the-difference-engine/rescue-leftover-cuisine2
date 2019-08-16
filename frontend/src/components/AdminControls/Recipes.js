import isObject from 'lodash/isObject';
import React, { Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Type } from 'react-bootstrap-table2-editor';
import './AdminTables.css';

const Recipes = ({ recipes }) => {
  const columns = [
    {
      dataField: 'inStock', // name?
      text: '',
      headerStyle: {
        borderTop: 'none',
        borderBottom: 'none',
      },
      style: {},
      align: 'left',
      formatter: (_cellContent, row) => (
        <div className="checkbox">
          <label htmlFor="adminCheckbox" className="admin-checkbox-container recipe-checkbox-spacing">
            <input id="adminCheckbox" type="checkbox" checked={row.inStock} />
            <span className="admin-table-checkmark" />
          </label>
        </div>
      ),
    },
    {
      dataField: 'title',
      text: 'Recipe Name',
      align: 'center',
      headerStyle: {
        textAlign: 'center',
        borderTop: 'none',
        borderBottom: 'none',
      },
    },
    {
      dataField: 'user',
      text: 'Created By',
      align: 'center',
      headerStyle: {
        textAlign: 'center',
        borderTop: 'none',
        borderBottom: 'none',
      },
      formatter: cell => `${cell.first_name} ${cell.last_name}`
      ,
    },
    {
      dataField: 'created_at',
      text: 'Date Created',
      align: 'center',
      headerStyle: {
        textAlign: 'center',
        borderTop: 'none',
        borderBottom: 'none',
      },
      formatter: (cell) => {
        let dateObj = cell;
        if (!isObject(cell)) {
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
      dataField: 'numberOfComments',
      text: 'Number Of Comments',
      align: 'center',
      headerStyle: {
        textAlign: 'center',
        borderTop: 'none',
        borderBottom: 'none',
      },
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
        value: recipes.length,
      },
    ],
  };

  return (
    <Fragment>
      <h1 className="admin-recipes-title">Admin Dashboard</h1>
      <BootstrapTable
        keyField="id"
        data={recipes}
        columns={columns}
        bordered={false}
        pagination={paginationFactory(options)}
      />
    </Fragment>
  );
};

export default Recipes;
