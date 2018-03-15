import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { bindActionCreators } from 'redux';

import Navbar from './navbar/Navbar.jsx';
import * as userActions from '../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.unAuthorized) {
      alert('access denied');
      this.props.history.push('/');
    }
    if (nextProps.isAuthenticated) {
      alert('Welcome');
      this.props.history.push('/admin');
    }
  }

  handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.userActions.signIn(email, password);
    }
  }


  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Navbar />
        <br />
        <div className="columns has-text-centered is-centered">
          <div className="column is-6">
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control">
                  <input className="input" type="email" name="email"
                    onChange={this.handleChange} value={email}
                    placeholder="Email"/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                    placeholder="password"/>
                </div>
              </div>
              <div className="control form-group">
                <button type="submit" className="button is-link">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    unAuthorized: state.user.unAuthorized,
  };
};

/**
 *
 * @param dispatch
 * @returns {{postAction: (ActionCreator<any> | ActionCreatorsMapObject)}}
 */
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

Login.propTypes = {
  userActions: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  unAuthorized: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
