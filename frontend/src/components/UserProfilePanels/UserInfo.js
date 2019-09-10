import React, { useState } from 'react';
import profilePic from '../../assets/profilePic.PNG';
import './UserInfo.css';
// import { adminEditUser } from '../../lib/apiClient';

function UserInfo({ user }) {
  const [editBox, editBoxHidden] = useState(false);
  const [userName, setUserName] = useState(`${user.first_name} ${user.last_name}`);
  const [errors, setErrors] = useState('');
  const validateUserName = (userInput) => {
    let result;
    const userArr = userInput.split(' ');
    if (userArr.length === 2 && userArr[0] !== '' && userArr[1] !== '') {
      result = true;
    } else {
      setErrors('Please enter your first and last name separated by a space.');
      result = false;
    }
    return result;
  };
  const editUser = () => {
    setUserName(' ');
    validateUserName(userName);
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
              { editBox
                ? (
                  <div>
                    <input
                      type="text"
                      defaultValue={userName}
                      onChange={e => setUserName(e.target.value)}
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
                    <p>{errors}</p>
                  </div>
                )
                : (
                  <div>
                    <h1>
                      {user.first_name}
                      {' '}
                      {user.last_name}
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
                )
              }
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
