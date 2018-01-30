import React, { Component } from 'react';
import Typist from 'react-typist';

import Navbar from '../navbar/Navbar.jsx';

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="has-text-centered">
        <Navbar/>
        <section className="hero is-medium is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title ">
                <Typist>
                Writing.
                </Typist>
              </h1>
              <h2 className="subtitle">
               Thoughts on Programming, Life and everything in between.
              </h2>
            </div>
          </div>
        </section>
        <div className="columns is-centered">
          <div className="column is-6 content ">
            <h2 className="has-text-weight-bold">Introduction to observables in Javascript</h2>
            <hr />
            <div className="has-text-justified">Content goes here Content goes
              here Content goes here Content goes here
              Content goes here
              Content goes here
              Content goes here</div>
          </div>
        </div>
      </div>
    )
  }
}


export default Blog;
