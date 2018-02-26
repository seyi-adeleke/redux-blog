import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

const toggleClass = (element, toggleClass) => {
  const currentClass = element[0].className;
  let newClass;
  if (currentClass.split(' ').indexOf(toggleClass) > -1) {
    newClass = currentClass.replace(new RegExp(`\\b${toggleClass}\\b`, 'g'), '');
  } else {
    newClass = `${currentClass} ${toggleClass}`;
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

  render() {
    return (
      <nav className="navbar is-fixed-top" id="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            🔥
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu" onClick={this.toggleBurger}>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item tagline-wrapper" >
              <span><Link className="name" to="/">Seyi</Link></span> <span className="tagline">Learn.Unlearn.Relearn</span>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <span><Link className="name" to="/blog">Blog</Link></span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;
