// src/app/components/Footer.js

import React, { Component } from "react";

// Import images
import github from "../img/social/github.png";
import stackoverflow from "../img/social/stack-overflow.png";
import linkedin from "../img/social/linkedin.png";

class Footer extends Component {
  render() {
    let { context } = this.props;

    return (
      <footer>
        <div className="container">
          <div className="about">
            <p>{context.state.data.footer.about}</p>
          </div>
          <div className="connect">
            <p>{context.state.data.footer.connect}</p>
            <div className="social">
              <a
                href="https://github.com/develijahlee/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github Logo" />
              </a>
              <a
                href="https://stackoverflow.com/users/12146388/elijah-lee"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={stackoverflow} alt="Stackoverflow Logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/elijah-lee-9397a2188/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin Logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
