import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

/**
 * Authentication HOC
 *
 * @param {JSX} ComposedComponent
 *
 * @returns {JSX} JSX
 */
export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) {
        this.props.history.push('/admin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.user.isAuthenticated,
      unAuthorized: state.user.unAuthorized,
    };
  };


  Authenticate.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  return connect(mapStateToProps)(Authenticate);
}
