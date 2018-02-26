import React from 'react';


const Skills = () => {
  return (
    <section className="section services">
      <div className="container has-text-centered">
        <h2 className="is-size-2" style={{ color: 'white' }}>Skills</h2>
        <h2 className="subtitle"  style={{ color: 'white' }}>
          I'm Familiar with a host of technologies used in Fullstack Web Development
        </h2>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <i className="fab fa-node-js fa-5x"/>
              <p className="subtitle">Node</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <i className="fab fa-angular fa-5x"/>
              <p className="subtitle">Angular</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <i className="fab fa-react fa-5x"/>
              <p className="subtitle">React</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" style={{ width: '1em', fontSize: '5em' }}/>
              <p className="subtitle">Webpack</p>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-2-mobile">
            <article className="tile is-child  box">
              <i className="fab fa-php fa-5x"/>
              <p className="subtitle">PHP</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <i className="fab fa-laravel fa-5x"/>
              <p className="subtitle">Laravel</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <img src="https://cdn.worldvectorlogo.com/logos/lumen-1.svg" style={{ width: '1em', fontSize: '2em' }}/>
              <p className="subtitle">Lumen</p>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <img src="https://www.vectorlogo.zone/logos/golang/golang-icon.svg" style={{ width: '2em', fontSize: '2em' }}/>
              <p className="subtitle">Golang</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <i className="fas fa-terminal fa-5x"/>
              <p className="subtitle">Bash</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
