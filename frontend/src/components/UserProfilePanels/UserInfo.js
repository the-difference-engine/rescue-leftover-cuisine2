import React, { useState } from 'react';
import trim from 'lodash/trim';
import profilePic from '../../assets/profilePic.PNG';
import './UserInfo.css';
import { editCurrentUserName } from '../../lib/apiClient';
import checkmark from '../../assets/checkmark-iconSave.png';

function UserInfo({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userFirstName, setUserFirstName] = useState(user.first_name);
  const [userLastName, setUserLastName] = useState(user.last_name);
  const [error, setError] = useState('');

  const validateUserName = (userInputName, userInputLast) => {
    if (userInputName === '' || userInputLast === '') {
      setError('Please enter your first and last name.');
      return false;
    }
    return true;
  };

  const editUser = async () => {
    if (validateUserName(userFirstName, userLastName)) {
      await editCurrentUserName(userFirstName, userLastName);
      const newData = { first_name: userFirstName, last_name: userLastName };
      const newUserData = { ...user, ...newData };
      setUser(newUserData);
      setIsEditing(false);
    }
  };

  const renderEditBox = () => {
    if (isEditing) {
      return (
        <div className="edit-name">
          <input
            type="text"
            defaultValue={userFirstName}
            placeholder="First Name"
            onChange={e => setUserFirstName(trim(e.target.value))}
          />
          <input
            type="text"
            defaultValue={userLastName}
            placeholder="Last Name"
            onChange={e => setUserLastName(trim(e.target.value))}
          />
          <button
            type="button"
            className="user-edit-button"
            onClick={editUser}
          >
            <img
              src={checkmark}
              alt="save"
              height="60"
            />
          </button>
          <p>{error}</p>
        </div>
      );
    }
    return (
      <div>
        <h1>
          { `${userFirstName} ${userLastName}` }
        </h1>
        <button
          type="button"
          className="user-edit-button"
          onClick={() => setIsEditing(true)}
        >
          <img
            src="https://img.icons8.com/windows/32/000000/edit.png"
            alt="edit"
          />
        </button>
      </div>
    );
  };

  return (
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
              {renderEditBox(isEditing)}
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
}

UserInfo.defaultProps = {
  user: {},
};
export default UserInfo;
