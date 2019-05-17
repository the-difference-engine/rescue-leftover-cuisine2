import React, { Component } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import profilePic from '../../assets/profilePic.PNG';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'recipes',
      recipes: [
        {
          id: 1,
          title: 'Cauliflower Salad',
          snippet: 'Soul-satisfying despite its healthy ingredients, this salad sings',
          meal: 'DINNER',
          ingredients: [
            '1 head cauliflower',
            '2 Tbsp olive oil',
            '1 can oil packaged tuna',
            '2 tsp Dijon mustard',
            'Juice of 2 lemons',
            'Salt and pepper',
          ],
          directions: [
            'Roast the cauliflower',
            'Make the dressing',
            'Toss',
          ],
          difficulty: 'EASY',
          duration: 60,
          servings: 6,
          photos: [
            '/recipe-seeds/cauliflowersalad.jpg',
          ],
          created_at: '2019-05-02T00:21:41.113Z',
          updated_at: '2019-05-02T00:21:41.113Z',
          user_id: 1,
        },
        {
          id: 3,
          title: 'Deviled Eggs',
          snippet: 'Everyone\'s favorite party snack!',
          meal: 'SNACK',
          ingredients: [
            '12 eggs',
            '2 Tbsp mustard',
            '3 Tbsp mayonnaise',
            '1 tsp paprika',
            '6 cornichons, diced',
            'Chives',
          ],
          directions: [
            'Boil the eggs',
            'Slice in half an remove yolks',
            'Mix yolks with other ingredients except chives',
            'Fill eggs with yolk mixture, garnish with paprika and chives',
          ],
          difficulty: 'MEDIUM',
          duration: 30,
          servings: 4,
          photos: [
            '/recipe-seeds/deviledeggs.jpg',
          ],
          created_at: '2019-05-02T00:21:41.142Z',
          updated_at: '2019-05-02T00:21:41.142Z',
          user_id: 1,
        },
      ],
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab, recipes } = this.state;

    return (
      <div className="profile-page container-fluid">
        <div className="row">
          <div className="profile-header">
            <Header showSearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 profile-content">
            <div className="row user">
              <div className="col-md-2 profile-pic" align="center">
                <img
                  src={profilePic}
                  alt="User"
                  className="profilePic"
                />
                <div>
                  <button type="button" className="user-edit-button">
                    <img
                      src="https://img.icons8.com/windows/32/000000/edit.png"
                      alt="edit"
                    />
                  </button>
                  <button type="button" className="user-edit-button">
                    <img
                      src="https://img.icons8.com/windows/32/000000/cancel.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
              <div className="col-md-9 user-info">
                <div className="user-name">
                  <h1>Jason Oliver</h1>
                  <button type="button" className="user-edit-button">
                    <img
                      src="https://img.icons8.com/windows/32/000000/edit.png"
                      alt="edit"
                    />
                  </button>
                </div>
                <br />
                <p>Member since December 2018</p>
                <div className="user-bio">
                  <button type="button" className="user-edit-button">
                    <img
                      src="https://img.icons8.com/windows/32/000000/edit.png"
                      alt="edit"
                    />
                  </button>
                  <p>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                    {'Nam sed varius diam, non egestas sapien. Phasellus a molestie augue, sit amet accumsan lectus. '}
                    {'Duis vel nulla viverra, semper diam non, eleifend sem. '}
                    {'Cras mattis sem nec nisl consectetur at posuere nulla aliquet.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row user-panel">
          <div className="col-md-2 user-nav-bar">
            <Nav tabs>
              <NavItem className={activeTab === 'recipes' ? 'user-nav-tab-active' : ''}>
                <NavLink
                  className={activeTab === 'recipes' ? 'recipes' : ''}
                  onClick={() => {
                    this.toggle('recipes');
                  }}
                >
                  My Recipes
                </NavLink>
              </NavItem>
              <NavItem className={activeTab === 'settings' ? 'user-nav-tab-active' : ''}>
                <NavLink
                  className={activeTab === 'settings' ? 'settings' : ''}
                  onClick={() => {
                    this.toggle('settings');
                  }}
                >
                  Settings
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="col-md-9 right-pane">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="recipes">
                <div id="cards-wrapper">
                  {recipes.map(recipe => (
                    <RecipeCard
                      {...recipe}
                      key={recipe.id}
                    />
                  ))}
                </div>
              </TabPane>
              <TabPane tabId="settings">
                <div className="settings-panel">
                  <h2>Password Settings</h2>
                  <Form>
                    <FormGroup>
                      <Label for="oldPassword" hidden>Old Password</Label>
                      <Input type="password" name="password" id="oldPassword" placeholder="Old Password" />
                      <FormText>I forgot my password.</FormText>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                      <Label for="newPassword" hidden>New Password</Label>
                      <Input type="password" name="password" id="newPassword" placeholder="New Password" />
                    </FormGroup>
                    {' '}
                    <Button>Change Password</Button>
                  </Form>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
