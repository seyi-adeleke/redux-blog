import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './navbar/Navbar.jsx';

const NotFoundPage = () => {
  return (<div>
    <Navbar/>
    <div>
      <div className="columns has-text-centered is-centered">
        <div className="column is-8 body-content ">
          <h2 className="title"><Link to="/"><i className="fas fa-home"/></Link> 404</h2>
          <figure className="image  is-16by9">
            <img src="https://i.imgur.com/Tjg8hQz.png" />
          </figure>
          <h2 className="subtitle">There's nothing here my guy</h2>
        </div>
      </div>
    </div>
  </div>);
};

export default NotFoundPage;

