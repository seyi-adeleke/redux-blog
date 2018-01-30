import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  toggleBurger(){
    const burger = document.getElementsByClassName('burger');
    const menu  = document.getElementsByClassName('navbar-menu');
    _toggleClass(burger, 'is-active');
    _toggleClass(menu, 'is-active');
  };

  render() {
    return(
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="button is-white logo">
            <strong><span>⚡</span><Link to="/"> SEYI </Link><span>⚡</span></strong>
          </button>
          <div className="navbar-burger burger" data-target="navbarMenu" onClick={this.toggleBurger}>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-white">
                    <span><Link to="/blog">Blog</Link></span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const _toggleClass = (element, toggleClass) => {
  const currentClass = element[0].className;
  let newClass;
  if(currentClass.split(" ").indexOf(toggleClass) > -1){
    newClass = currentClass.replace(new RegExp('\\b'+toggleClass+'\\b','g'),"")
  }else{
    newClass = currentClass + " " + toggleClass;
  }
  element[0].className = newClass.trim();
};

export default Navbar;
