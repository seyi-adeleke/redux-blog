import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../navbar/Navbar.jsx';
import NotFound from '../NotFoundPage.jsx';
// import { getPostAction } from '../../actions';
import * as postActions from '../../actions/postActions';


class BlogPost extends Component {
  componentWillMount() {
    this.props.postAction.getPost(this.props.match.params.slug);
  }

  render() {
    return (
      <div className="has-text-centered">
        <Navbar/>
        <div>
          {
            this.props.post ? <div>
              <h1 className="title">{this.props.post ? this.props.post.title : null}</h1>

              <div> {this.props.post ? this.props.post.text : null}
              </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);

