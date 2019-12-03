import React from 'react';
import { withRouter } from 'react-router-dom';
import './Page404.css';

const Page404 = ({ location }) => (
  <div id="error">
    <h1 className="notFoundTitle">404</h1>
    <h2 className="notFoundText">
      No match found for &nbsp;
      <code>{location.pathname}</code>
    </h2>
  </div>
);

export default withRouter(Page404);
