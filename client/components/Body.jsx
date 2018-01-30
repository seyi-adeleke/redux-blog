import React, { Component } from 'react';
import Navbar from './navbar/Navbar.jsx';


class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      <Navbar/>
      <div>
        <div className="columns  is-centered">
          <div className="column is-8 content ">
           <div className="title">Seyi Adeleke</div>
            <div className="subtitle">Fullstack Engineer From Lagos, NG</div>
            <div className="text">
              I primarily do fullstack software development and consulting for both
              local and international startups. Presently i'm comfortable with <span className="firebrickred">Javascript </span>
               technologies, <span className="firebrickred">Php</span>, <span className="firebrickred">Golang</span>, <span className="firebrickred">bash</span> scripting and I also do a bit of <span className="firebrickred">devops</span>.
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
      </div>
      </div>
    )
  }
}

export default Body;

