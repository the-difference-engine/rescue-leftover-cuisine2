import map from 'lodash/map';
import React, { Fragment } from 'react';
import PaginatedTable from './PaginatedTable';
import { formatDate } from '../../lib/utilities';
import { deleteRecipe } from '../../lib/apiClient';
import './AdminTables.scss';

const Recipes = ({ history, recipes, refreshRecipes }) => {
  const handleEdit = (recipeId) => {
    history.push(`/recipe/${recipeId}/edit`);
  };

  const handleDelete = async (recipeId) => {
    await deleteRecipe(recipeId);
    refreshRecipes();
  };

  const adminButtons = id => (
    <div>
      <button type="button" className="icon-button" onClick={() => handleEdit(id)}>
        <img
          src="https://img.icons8.com/windows/32/000000/edit.png"
          alt="edit"
        />
      </button>
      <button type="button" className="icon-button" onClick={() => handleDelete(id)}>
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

  const recipeRow = ({
    id,
    title,
    user,
    comment_count: commentCount,
    created_at: createdAt,
  }) => (
    <tr>
      <td>{title}</td>
      <td>{`${user.first_name} ${user.last_name}`}</td>
      <td>{formatDate(createdAt)}</td>
      <td>{commentCount}</td>
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
