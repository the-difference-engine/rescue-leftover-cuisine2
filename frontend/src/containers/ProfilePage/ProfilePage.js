import React, { useState, useEffect } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';
import isNil from 'lodash/isNil';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import UserInfo from '../../components/UserProfilePanels/UserInfo';
import SettingsTab from '../../components/UserProfilePanels/SettingsTab';
import { getUserRecipes } from '../../lib/apiClient';
import './ProfilePage.scss';

const ProfilePage = ({
  user, setUser, setJwt, history, location,
}) => {
  const [recipes, setRecipes] = useState([]);

  const showAdminLink = () => (
    <NavItem>
      <NavLink onClick={() => history.push('/admin')}>
        Administration
      </NavLink>
    </NavItem>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserRecipes(user.id).then(data => setRecipes(data));
  }, []);

  let activeTab = '';

  if (location.hash === '#settings') {
    activeTab = 'settings';
  } else {
    activeTab = 'recipes';
  }

  if (!isNil(user)) {
    return (
      <div className="profile-page container-fluid">
        <Helmet>
          <title>Profile</title>
          <meta property="og:title" content="Profile | Rescuing Leftover Cuisine" />
          <meta property="og:type" content="profile" />
          <meta property="og:profile:first_name" content={user.first_name} />
          <meta property="og:profile:last_name" content={user.last_name} />
          <meta property="og:profile:username" content={user.email} />
        </Helmet>
        <div className="row">
          <div className="profile-header">
            <Header showSearchBar user={user} setJwt={setJwt} />
          </div>
        </div>
        <div>
          <UserInfo user={user} setUser={setUser} />
          <div className="row user-panel">
            <div className="col-md-2 user-nav-bar">
              <Nav tabs>
                <NavItem className={activeTab === 'recipes' ? 'user-nav-tab-active' : ''}>
                  <NavLink
                    onClick={() => history.push('/profile#recipes')}
                  >
                    My Recipes
                  </NavLink>
                </NavItem>
                <NavItem className={activeTab === 'settings' ? 'user-nav-tab-active' : ''}>
                  <NavLink onClick={() => history.push('/profile#settings')}>
                    Settings
                  </NavLink>
                </NavItem>
                {user.is_admin ? showAdminLink() : null}
              </Nav>
            </div>
            <div className="col-md-9 right-pane">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="recipes" id="recipes">
                  <div id="cards-wrapper">
                    {map(recipes, recipe => (
                      <RecipeCard
                        {...recipe}
                        key={recipe.id}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane tabId="settings" id="settings">
                  <SettingsTab />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page container-fluid">
      <div className="row">
        <div className="profile-header">
          <Header showSearchBar user={user} setJwt={setJwt} />
        </div>
      </div>
      <div>
        <h1>Login to access this page.</h1>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfilePage);
