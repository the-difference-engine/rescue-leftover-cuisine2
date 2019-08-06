import React from 'react';
import profilePic from '../../assets/profilePic.PNG';
import './UserInfo.css';

function formatName(user) {
  return `${user.first_name} ${user.last_name}`;
}

const UserInfo = user => (
  <div className="row">
    <div className="col-md-12 profile-content">
      <div className="row profilePage-user">
        <div className="col-md-2" align="center">
          <img
            src={profilePic}
            alt="User"
            className="profilePage-profilePic"
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
          <div className="profilePage-user-name">
            <h1 {...console.log(user)}>
              {' '}
              {formatName(user)}
            </h1>
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
);

UserInfo.defaultProps = {
  user: {},
};

export default UserInfo;
