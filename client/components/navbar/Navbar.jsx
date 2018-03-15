import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import store from '../../store';
import { SIGN_OUT } from '../../actions/actionTypes';


const toggleClass = (element, toggle) => {
  const currentClass = element[0].className;
  let newClass;
  if (currentClass.split(' ').indexOf(toggle) > -1) {
    newClass = currentClass.replace(new RegExp(`\\b${toggle}\\b`, 'g'), '');
  } else {
    newClass = `${currentClass} ${toggle}`;
  }
  element[0].className = newClass.trim();
};


class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleBurger() {
    const burger = document.getElementsByClassName('burger');
    const menu = document.getElementsByClassName('navbar-menu');
    toggleClass(burger, 'is-active');
    toggleClass(menu, 'is-active');
  }

  handleScroll() {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) {
      nav.className = 'navbar is-fixed-top';
    } else {
      nav.className = 'navbar is-fixed-top nav-scroll';
    }
  }

  logOut() {
    localStorage.removeItem('token');
    store.dispatch({
      type: SIGN_OUT,
      payload: false,
    });
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" id="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            🔥
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu"
            onClick={this.toggleBurger}>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item tagline-wrapper" >
              <span><Link className="name" to="/">Seyi</Link></span>
              <span className="tagline">Learn.Unlearn.Relearn</span>
            </div>
          </div>
          <div className="navbar-end">
            { this.props.isAuthenticated ? <div className="navbar-item" onClick={this.logOut}>
              <a className="name">Logout</a>
            </div> : null }

            <div className="navbar-item">
              { this.props.isAuthenticated ?
                <span><Link className="name" to="/admin">Admin</Link></span> : null }
              <span><Link className="name" to="/blog">Blog</Link></span>
            </div>
          </div>
        </div>
      </nav>
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


Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userActions: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

