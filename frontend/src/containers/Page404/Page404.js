import React from 'react';
import { withRouter } from 'react-router-dom';
import './Page404.css';

const Page404 = () => (
  <div id="error">
    <h1 className="notFoundTitle">404</h1>
    <h2 className="notFoundText">
    The page you are looking for cannot be found.
    </h2>
  </div>
);

export default withRouter(Page404);
