import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../navbar/Navbar.jsx';
import NotFound from '../NotFoundPage.jsx';
import { getPostAction } from '../../actions';

class BlogPost extends Component {
  componentWillMount() {
    this.props.getPostAction(this.props.match.params.slug);
  }

  render() {
    return (
      <div className="has-text-centered">
        <Navbar/>
        <div>
          {
            this.props.post ? <div>
              <h1 className="title">{this.props.post ? this.props.post.title : null}</h1>

              <p> {this.props.post ? this.props.post.text : null}
              </p>
            </div> : <NotFound />
          }
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
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { getPostAction })(BlogPost);

