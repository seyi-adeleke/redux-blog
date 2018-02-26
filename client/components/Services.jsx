import React from 'react';


const Services = () => {
  return (
    <section className="section has-text-centered services">
      <h1 className="title" style={{ color: 'white' }}>What I do</h1>
      <div className="tile has-text-left is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <i className="title fas fa-globe fa-3x"/>
            <p className="subtitle firebrickred ">Web Applications</p>
            <div className="content services-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <i className="title fas fa-mobile-alt fa-3x"/>
            <p className="subtitle firebrickred ">Mobile Applications</p>
            <div className="content services-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <i className="title fas fa-pencil-alt fa-3x"/>
            <p className="subtitle firebrickred">Technical Wrtiting</p>
            <div className="content services-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
