import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import profilePic from '../../assets/profilePic.PNG';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // activeTab: 'recipes',
      // recipes: [],
    };
  }

  render() {
    // const { activeTab, recipes } = this.state;

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
              <div className="col-md-3 profile-pic" align="center">
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
              <div className="col-md-7 user-info">
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
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
