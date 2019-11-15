import map from 'lodash/map';
import React, { Component } from 'react';
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

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'recipes',
      recipes: [],
      users: [],
      render: false,
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

    const { user } = this.props;

    if (isNil(user)) {
      setTimeout(() => {
        this.setState({ render: true });
      }, 2000);
    } else this.setState({ render: true });
  }

  refreshUsers = () => {
    getUsers().then((data) => {
      this.setState({
        users: this.createFullName(data),
      });
    });
  }

  createFullName = (data) => {
    const newData = map(data, (obj) => {
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
    const { user, setJwt } = this.props;
    const {
      activeTab, recipes, users, render,
    } = this.state;
    if (render) {
      if (isNil(user)) return (<Redirect to="/login" />);

      if (!user.is_admin) return (<Redirect to="/" />);

      if (!isNil(user)) {
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
            <TabContent id="bootstrap-overrides-pagination" activeTab={activeTab}>
              <TabPane tabId="recipes" className="table">
                <Recipes recipes={recipes} />
              </TabPane>
              <TabPane tabId="users" className="table">
                <Users users={users} refreshUsers={this.refreshUsers} />
              </TabPane>
            </TabContent>
            <Footer />
          </div>
        );
      }
    }
    return null;
  }
}

export default AdminPanel;
