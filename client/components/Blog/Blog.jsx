import React, { Component } from 'react';
import Typist from 'react-typist';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/postActions';

import Navbar from '../navbar/Navbar.jsx';
import Footer from '../Footer.jsx';

class Blog extends Component {
  componentWillMount() {
    this.props.postAction.getPosts(true);
  }

  render() {
    return (
      <div className="has-text-centered">
        <Navbar/>
        <section className="blog-hero hero  is-large">
          <div className="hero-body">
            <div>
              <h1 className="title">
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
          <div className="column is-6 content has-text-left">
            { this.props.posts ? this.props.posts.map((post, index) =>
              <div key={index}>
                <h6 className="title is-5"><i className="far fa-calendar-alt"/>
                  <Moment format="MMMM DD, YYYY">{post.date}</Moment></h6>
                <h3 className="subtitle blog-title is-2">
                  <Link to={{ pathname: `/blog/${post.slug}` }}>{post.title}</Link>
                </h3>
                <p>
                  {post.excerpt}
                </p>
                <Link to={{ pathname: `/blog/${post.slug}` }}>
                  <span className="firebrickred">Keep Reading</span></Link>
                <hr />
              </div>)
              : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

/**
 *
 * @param state
 * @returns {{posts: *}}
 */
function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  };
}

/**
 *
 * @param dispatch
 * @returns {{postAction: (ActionCreator<any> | ActionCreatorsMapObject)}}
 */
function mapDispatchToProps(dispatch) {
  return {
    postAction: bindActionCreators(postActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
