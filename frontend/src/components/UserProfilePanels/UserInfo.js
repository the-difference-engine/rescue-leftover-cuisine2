import React, { useState } from 'react';
import isNil from 'lodash/isNil';
import trim from 'lodash/trim';
import './UserInfo.scss';
import { editCurrentUserName, putCurrentUserPhoto } from '../../lib/apiClient';
import checkmark from '../../assets/checkmark-iconSave.png';

function UserInfo({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userFirstName, setUserFirstName] = useState(user.first_name);
  const [userLastName, setUserLastName] = useState(user.last_name);
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState(user.profile_photo);

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

  const getBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => cb(reader.result);
    reader.onerror = err => console.log('Error: ', err);
  };

  const putPhotoUpdate = p => putCurrentUserPhoto(p).then(() => setPhoto(p));

  const changeProfilePhoto = (e) => {
    e.preventDefault();

    if (isNil(e.target.files[0])) {
      return;
    }

    getBase64(e.target.files[0], putPhotoUpdate);
  };

  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];
  const month = user.created_at.slice(5, 7);
  const year = user.created_at.slice(0, 4);
  const userCreated = `${monthNames[month - 1]} ${year}`;

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
              src={photo}
              alt="User"
              className="profilePage-profilePic"
            />
            <br />
            <label htmlFor="profile-photo" id="profile-photo-label">
              <input
                id="profile-photo"
                type="file"
                style={{ visibility: 'hidden' }}
                onChange={changeProfilePhoto}
              />
              <i className="user-edit-button">
                <img
                  src="https://img.icons8.com/windows/32/000000/edit.png"
                  alt="edit"
                />
              </i>
            </label>
          </div>
          <div className="col-md-9 user-info">
            <div className="profilePage-user-name">
              {renderEditBox(isEditing)}
            </div>
            <br />
            <p>
              Member since
              {' '}
              {userCreated}
            </p>
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
