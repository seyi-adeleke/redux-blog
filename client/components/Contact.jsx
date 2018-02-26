import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <section className="section contact">
        <div className="columns has-text-centered is-centered">
          <div className="column is-6">
            <h2 className="is-size-2">Get In Touch</h2>
            <div className="seperator">
              <span></span>
            </div>
            <h2 className="subtitle">
              Want to get in touch? Send me an email using the form below.</h2>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"/>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input className="input " type="email" placeholder="Email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"/>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control is-expanded">
                <div className="select is-fullwidth ">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Your Messsage"/>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" style={{ backgroundColor: 'firebrick' }}>Submit</button>
              </div>
            </div>
            <hr />
            <div>
              <a href="https://www.github.com/seyi-adeleke" target="_blank"><i className="fab social fa-github fa-3x" /></a>
              <a href="https://www.twitter.com/seyi__adeleke" target="_blank"><i className="fab social fa-twitter  fa-3x" /></a>
              <a href="https://www.instagram.com/seyi_adeleke/" target="_top"><i className="fab social fa-instagram  fa-3x" /></a>
              <a href="https://ng.linkedin.com/in/seyiadeleke" target="_blank"> <i className="fab social fa-linkedin  fa-3x" /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

