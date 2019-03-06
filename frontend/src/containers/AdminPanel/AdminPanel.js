import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Recipes from '../../components/AdminControls/Recipes';
import Users from '../../components/AdminControls/Users';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';
import './AdminPanel.css';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'recipes',
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };
  render() {
    return (
      <div className="admin-panel-container">
        <div className="admin-header">
          <Header />
        </div>
        <Nav tabs>
          <NavItem
            className={this.state.activeTab === 'recipes' ? 'nav-tab-line' : ''}
          >
            <NavLink
              className={classnames({
                active: this.state.activeTab === 'recipes',
              })}
              onClick={() => {
                this.toggle('recipes');
              }}
            >
              All Recipes
            </NavLink>
          </NavItem>
          <NavItem
            className={this.state.activeTab === 'users' ? 'nav-tab-line' : ''}
          >
            <NavLink
              className={classnames({
                active: this.state.activeTab === 'users',
              })}
              onClick={() => {
                this.toggle('users');
              }}
            >
              All Members
            </NavLink>
          </NavItem>
          {this.state.activeTab === 'recipes' && (
            <Button size="lg" className="admin-add-button">
              Add Recipes
            </Button>
          )}
          {this.state.activeTab === 'users' && (
            <Button size="lg" className="admin-add-button">
              Add Member
            </Button>
          )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="recipes" className="table">
            <Recipes />
          </TabPane>
          <TabPane tabId="users">
            <Users />
          </TabPane>
        </TabContent>

        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
