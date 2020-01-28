import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Button,
} from 'reactstrap';
import isNil from 'lodash/isNil';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { getRecipes, getUsers } from '../../lib/apiClient';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Recipes from '../../components/AdminControls/Recipes';
import Users from '../../components/AdminControls/Users';
import './AdminPanel.scss';

const AdminPanel = ({ user, setJwt }) => {
  if (isNil(user)) return (<Redirect to="/login" />);

  if (!user.is_admin) return (<Redirect to="/" />);

  const [activeTab, setActiveTab] = useState('recipes');
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  const createFullName = (data) => {
    const newData = map(data, (obj) => {
      const newObj = obj;
      newObj.full_name = `${obj.first_name} ${obj.last_name}`;
      return newObj;
    });
    return newData;
  };

  const refreshUsers = () => getUsers().then(data => setUsers(createFullName(data)));

  const refreshRecipes = () => getRecipes().then(data => setRecipes(data));

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
    refreshUsers();
  }, []);

  return (
    <div className="admin-panel-container">
      <Helmet>
        <title>Admin</title>
        <meta property="og:title" content="Admin | Rescuing Leftover Cuisine" />
      </Helmet>
      <div className="admin-header">
        <Header showSearchBar user={user} setJwt={setJwt} />
      </div>
      <Nav tabs>
        <NavItem className={activeTab === 'recipes' ? 'nav-tab-line' : ''}>
          <NavLink
            className={activeTab === 'recipes' ? 'recipes' : ''}
            onClick={() => {
              setActiveTab('recipes');
            }}
          >
            All Recipes
          </NavLink>
        </NavItem>
        <NavItem className={activeTab === 'users' ? 'nav-tab-line' : ''}>
          <NavLink
            className={activeTab === 'users' ? 'users' : ''}
            onClick={() => {
              setActiveTab('users');
            }}
          >
            All Members
          </NavLink>
        </NavItem>
        {activeTab === 'recipes' && (
          <Button className="admin-add-button" size="lg">
            Add Recipe
          </Button>
        )}
      </Nav>
      <TabContent id="bootstrap-overrides-pagination" activeTab={activeTab}>
        <TabPane tabId="recipes" className="table">
          <Recipes recipes={recipes} refreshRecipes={refreshRecipes} />
        </TabPane>
        <TabPane tabId="users" className="table">
          <Users users={users} refreshUsers={refreshUsers} />
        </TabPane>
      </TabContent>
      <Footer />
    </div>
  );
};

export default AdminPanel;
