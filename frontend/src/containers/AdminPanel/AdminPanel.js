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
      activeTab: '1',
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
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <Nav tabs>
          <NavItem className={this.state.activeTab === '1' ? 'line' : ''}>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '1',
              })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              All Recipes
            </NavLink>
          </NavItem>
          <NavItem className={this.state.activeTab === '2' ? 'line' : ''}>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '2',
              })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              All Members
            </NavLink>
          </NavItem>
          {this.state.activeTab === '1' && (
            <Button size="lg" className="addButton">
              Add Recipes
            </Button>
          )}
          {this.state.activeTab === '2' && (
            <Button size="lg" className="addButton">
              Add Member
            </Button>
          )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="table">
            <h1 className="adminHeader">Admin Dashboard</h1>
            <Recipes />
          </TabPane>
          <TabPane tabId="2">
            <h1 className="adminHeader">Admin Dashboard</h1>
            <Users />
          </TabPane>
        </TabContent>

        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
