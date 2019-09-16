import React, { useState } from 'react';
import capitalize from 'lodash/capitalize';
import profilePic from '../../assets/profilePic.PNG';
import './UserInfo.css';
import { userEditUser } from '../../lib/apiClient';
import checkmark from '../../assets/checkmark-iconSave.png';

function UserInfo({ user, setUser }) {
  const [editBox, editBoxHidden] = useState(false);
  const [userFirstName, setUserFirstName] = useState(`${user.first_name}`);
  const [userLastName, setUserLastName] = useState(`${user.last_name}`);
  const [error, setError] = useState('');

  const validateUserName = (userInputName, userInputLast) => {
    let result;
    if (userInputName === '' || userInputName === ' ' || userInputLast === '' || userInputLast === ' ') {
      result = false;
      setError('Please enter your first and last name');
    } else if (userInputName.split(' ').length > 2 && userInputName.split(' ')[0] !== '') {
      result = false;
      setError('Please do not use more than two words in a first name');
    } else if (userInputLast.split(' ').length > 1 && userInputLast.split(' ')[0] !== '') {
      result = false;
      setError('Please do not use more than one word in a last name');
    } else if (userInputName.split(' ')[0] === '' || userInputLast.split(' ')[0] === '') {
      result = false;
      setError('Please do not include spaces in names');
    } else {
      setError('');
      result = true;
    }
    return result;
  };

  const editUser = async () => {
    const newData = { first_name: userFirstName, last_name: userLastName };
    if (validateUserName(userFirstName, userLastName)) {
      await userEditUser(newData, user.id);
      const newUserData = { ...user, ...newData };
      setUser(newUserData);
      editBoxHidden(false);
    }
  };

  const renderEditBox = (contentToRender) => {
    let contentRendered;
    if (contentToRender === true) {
      contentRendered = (
        <div className="edit-name">
          <input
            type="text"
            defaultValue={userFirstName}
            placeholder="First Name"
            onChange={e => setUserFirstName(capitalize(e.target.value))}
          />
          <input
            type="text"
            defaultValue={userLastName}
            placeholder="Last Name"
            onChange={e => setUserLastName(capitalize(e.target.value))}
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
