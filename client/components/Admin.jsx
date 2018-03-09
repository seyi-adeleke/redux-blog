import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import Moment from 'react-moment';


import Navbar from './navbar/Navbar.jsx';
import { getPostsAction, deletePostAction } from '../actions/index';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    this.props.getPostsAction();
  }

  deletePost(slug) {
    const confirmed = confirm('Are you sure you want to delete this post?')
    if (confirmed) {
      this.props.deletePostAction(slug);
      this.props.getPostsAction();
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <br />
        <h1 className="title is-1 has-text-centered">Posts</h1>
        <div className="columns has-text-centered is-centered">
          <br/>
          <div className="column is-8-desktop is-2-mobile" style={{ width: 'auto' }} >
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date Created</th>
                  <th>Tags</th>
                  <th>Published</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                { this.props.posts ? this.props.posts.map((post, index) =>
                  <tr key={index}>
                    <td>{post.title}</td>
                    <td><Moment format="MMMM DD, YYYY">{post.date}</Moment></td>
                    <td>Javascirpt, php</td>
                    <td>
                      True
                    </td>
                    <td> <a className="delete is-large" onClick={() => this.deletePost(post.slug)}/> </td>
                  </tr>)
                  : null}
              </tbody>
            </table>
          </div>
        </div>
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
    posts: state.posts.posts,
  };
}

Admin.propTypes = {
  getPostsAction: PropTypes.func.isRequired
};


export default connect(mapStateToProps, { getPostsAction, deletePostAction })(Admin);