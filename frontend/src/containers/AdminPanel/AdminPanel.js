import React, { Component } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Button,
} from 'reactstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Recipes from '../../components/AdminControls/Recipes';
import Users from '../../components/AdminControls/Users';
import './AdminPanel.css';
import { getRecipes, getUsers } from '../../lib/apiClient';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'recipes',
      recipes: [],
      users: [],
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    getRecipes().then((data) => {
      this.setState({
        recipes: data,
      });
    });

    getUsers().then((data) => {
      this.setState({
        users: this.createFullName(data),
      });
    });
  }

  createFullName = (data) => {
    const newData = data.map((obj) => {
      const newObj = obj;
      newObj.full_name = `${obj.first_name} ${obj.last_name}`;
      return newObj;
    });
    return newData;
  };

  toggle(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab, recipes, users } = this.state;

    return (
      <div className="admin-panel-container">
        <div className="admin-header">
          <Header showSearchBar />
        </div>
        <Nav tabs>
          <NavItem className={activeTab === 'recipes' ? 'nav-tab-line' : ''}>
            <NavLink
              className={activeTab === 'recipes' ? 'recipes' : ''}
              onClick={() => {
                this.toggle('recipes');
              }}
            >
              All Recipes
            </NavLink>
          </NavItem>
          <NavItem className={activeTab === 'users' ? 'nav-tab-line' : ''}>
            <NavLink
              className={activeTab === 'users' ? 'users' : ''}
              onClick={() => {
                this.toggle('users');
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
          {activeTab === 'users' && (
            <Button className="admin-add-button" size="lg">
              Add Member
            </Button>
          )}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="recipes" className="table">
            <Recipes recipes={recipes} />
          </TabPane>
          <TabPane tabId="users" className="table">
            <Users users={users} />
          </TabPane>
        </TabContent>
        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
