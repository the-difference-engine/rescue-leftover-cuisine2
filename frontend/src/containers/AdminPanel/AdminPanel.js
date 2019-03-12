import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Recipes from '../../components/AdminControls/Recipes';
import Users from '../../components/AdminControls/Users';
import './AdminPanel.css';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'recipes',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
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
              className={this.state.activeTab === 'recipes' ? 'recipes' : ''}
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
              className={this.state.activeTab === 'users' ? 'users' : ''}
              onClick={() => {
                this.toggle('users');
              }}
            >
              All Members
            </NavLink>
          </NavItem>
          {this.state.activeTab === 'recipes' && (
            <Button className="admin-add-button" size="lg">
              Add Recipe
            </Button>
          )}
          {this.state.activeTab === 'users' && (
            <Button className="admin-add-button" size="lg">
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
