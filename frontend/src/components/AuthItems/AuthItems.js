import React, { useState } from 'react';
import LogInPageHeader from '../LogInPageHeader/LogInPageHeader';
import Footer from '../Footer/Footer';
import './AuthItems.css';

const AuthPage = ({ children }) => (
  <div className="auth-page container-fluid">
    <div className="row">
      <LogInPageHeader />
    </div>
    <div className="auth-page-content">
      <div className="auth-cards-wrapper d-flex flex-row justify-content-center">
        { children }
      </div>
    </div>
    <div className="auth-footer row">
      <Footer />
    </div>
  </div>
);

const AuthCard = ({
  children, title, submitText, handleSubmit, errorMessage, successMessage,
}) => {
  const [pwordVisible, setPwordVisible] = useState(false);
  const childrenWithProps = React.Children.map(
    children,
    child => React.cloneElement(child, { pwordVisible, setPwordVisible }),
  );

  return (
    <div className="auth-card">
      <h3 className="auth-card-header">
        { title }
      </h3>

      <form className="auth-card-form" onSubmit={handleSubmit}>
        { childrenWithProps }

        <div className="row form-group">
          <button
            className="auth-card-submit btn btn-lg btn-block"
            type="button"
            onClick={handleSubmit}
          >
            { submitText }
          </button>
        </div>
      </form>

      <div className="auth-card-error row align-middle">
        { errorMessage }
      </div>
      <div className="auth-card-success row align-middle">
        { successMessage }
      </div>
    </div>
  );
};

const AuthInput = ({
  form, name, placeholder, type, required, minLength, pattern, handleChange, column,
  pwordVisible, setPwordVisible,
}) => {
  const id = `auth-card-input-${form}-${name}`;

  const visibleType = () => {
    if (type === 'password') {
      return pwordVisible ? 'text' : 'password';
    }
    return type;
  };

  const visibleBtn = () => {
    if (type === 'password') {
      return (
        <span
          className={pwordVisible ? 'fas fa-eye-slash fa-lg auth-pword-vis' : 'fas fa-eye fa-lg auth-pword-vis'}
          onClick={() => setPwordVisible(!pwordVisible)}
        />
      );
    }
    return null;
  };

  return (
    <div className={column ? 'auth-card-column' : 'form-group row align-middle'}>
      <input
        type={visibleType()}
        className="auth-card-input form-control-lg"
        id={id}
        name={name.toLowerCase()}
        required={required}
        minLength={minLength || '0'}
        maxLength="128"
        pattern={pattern || ''}
        placeholder={placeholder}
        onFocus={event => event.target.setAttribute('placeholder', '')}
        onBlur={event => event.target.setAttribute('placeholder', placeholder)}
        onChange={handleChange}
      />
      <label htmlFor={id}>{ placeholder }</label>
      { visibleBtn() }
    </div>
  );
};

export { AuthPage, AuthCard, AuthInput };
