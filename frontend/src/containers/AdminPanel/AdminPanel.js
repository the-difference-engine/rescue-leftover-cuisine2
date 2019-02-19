import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Recipes from '../../components/AdminControls/Recipes';
import Users from '../../components/AdminControls/Users';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';
import classnames from 'classnames';
import './AdminPanel.css';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
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
      <div>
        <div className="header">
          <Header />
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              All Recipes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              All Members
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Button className="addButton">Add Recipe</Button>

            <h1>Admin Dashboard</h1>
            <Recipes />
          </TabPane>
          <TabPane tabId="2">
            <Button className="addButton">Add Member</Button>
            <h1>Admin Dashboard</h1>
            <Users />
          </TabPane>
        </TabContent>

        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
