import map from 'lodash/map';
import React, { Fragment } from 'react';
import PaginatedTable from './PaginatedTable';
import { formatDate } from '../../lib/utilities';
import './AdminTables.scss';

const Recipes = ({ recipes }) => {
  const adminButtons = (
    <div>
      <button type="button" className="icon-button">
        <img
          src="https://img.icons8.com/windows/32/000000/edit.png"
          alt="edit"
        />
      </button>
      <button type="button" className="icon-button">
        <img
          src="https://img.icons8.com/windows/32/000000/cancel.png"
          alt="delete"
        />
      </button>
    </div>
  );

  const headerRow = (
    <tr>
      <th>Recipe Name</th>
      <th>Created By</th>
      <th>Date Created</th>
      <th>Number of Comments</th>
      <th />
    </tr>
  );

  const recipeRow = ({ title, user, created_at: createdAt }) => (
    <tr>
      <td>{title}</td>
      <td>{`${user.first_name} ${user.last_name}`}</td>
      <td>{formatDate(createdAt)}</td>
      <td>TBD</td>
      <td>{adminButtons}</td>
    </tr>
  );

  return (
    <Fragment>
      <h1 className="admin-recipes-title">Admin Dashboard</h1>
      <PaginatedTable bodyRows={map(recipes, recipeRow)} headerRow={headerRow} />
    </Fragment>
  );
};

export default Recipes;
