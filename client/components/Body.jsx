import React, { Component } from 'react';
import Typist from 'react-typist';

import Navbar from './navbar/Navbar.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

class Body extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section className="hero  is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <Typist>
                  Seyi Adeleke
                </Typist>
              </h1>
              <h2 className="subtitle" style={{ color: 'firebrick' }}>
                Fullstack Engineer From Lagos, NG
              </h2>
              <div className="text">
                I primarily do fullstack software development and consulting for both
                local and international startups. Presently i'm comfortable with
                <span className="firebrickred">Javascript </span>
                technologies, <span className="firebrickred">Php</span>,
                <span className="firebrickred">Golang</span>, <span className="firebrickred">bash</span>
                scripting and I also do a bit of <span className="firebrickred">devops</span>.
                As you can probably tell i'm a fan of Minimalism 😀
              </div>
              <div className="menu">
                <div className="menu-section">
                  <div className="menu-item">
                    <a className="menu-link">Email</a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link">Resume</a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" rel="noopener" href="https://github.com/seyi-adeleke">Github</a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="https://www.linkedin.com/in/seyiadeleke/" rel="noopener">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Body;

