import React, { useState } from 'react';
import profilePic from '../../assets/profilePic.PNG';
import './UserInfo.css';
import { userEditUser } from '../../lib/apiClient';

function UserInfo({ user }) {
  const [editBox, editBoxHidden] = useState(false);
  const [userFirstName, setUserFirstName] = useState(`${user.first_name}`);
  const [userLastName, setUserLastName] = useState(`${user.last_name}`);
  const [error, setError] = useState('');

  const firstStrToUpper = (input) => {
    if (input.length > 0) {
      return `${input[0].toUpperCase()}${input.slice(1)}`;
    }
    return input;
  };

  const validateUserName = (userInputName, userInputLast) => {
    let result;
    if (userInputName === '' || userInputName === ' ' || userInputLast === '' || userInputLast === ' ') {
      result = false;
      setError('Please enter your first and last name');
    } else if (userInputName.split(' ').length > 1 || userInputLast.split(' ').length > 1) {
      result = false;
      setError('Please do not include spaces in names');
    } else {
      setError('');
      result = true;
    }
    return result;
  };

  const editUser = () => {
    const newData = { firstName: userFirstName, lastName: userLastName };
    if (validateUserName(userFirstName, userLastName)) {
      userEditUser(newData, user.id);
      editBoxHidden(false);
    }
  };

  const renderEditBox = (x) => {
    let contentRendered;
    if (x === true) {
      contentRendered = (
        <div>
          <input
            type="text"
            defaultValue={userFirstName}
            placeholder="First Name"
            onChange={e => setUserFirstName(firstStrToUpper(e.target.value))}
          />
          <input
            type="text"
            defaultValue={userLastName}
            placeholder="Last Name"
            onChange={e => setUserLastName(firstStrToUpper(e.target.value))}
          />
          <button
            type="button"
            onClick={editUser}
          >
            <img
              src="https://img.icons8.com/android/48/000000/checkmark.png"
              alt="save"
            />
          </button>
          <p>{error}</p>
        </div>
      );
    } else {
      contentRendered = (
        <div>
          <h1>
            {userFirstName}
            {' '}
            {userLastName}
          </h1>
          <button
            type="button"
            className="user-edit-button"
            onClick={() => editBoxHidden(true)}
          >
            <img
              src="https://img.icons8.com/windows/32/000000/edit.png"
              alt="edit"
            />
          </button>
        </div>
      );
    }
    return contentRendered;
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
              {renderEditBox(editBox)}
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
