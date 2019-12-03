// src/app/components/Header.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.js";

// Import CSS
import "../styles/components/header.css";

class Header extends Component {
  render() {
    let { context } = this.props;
    return (
      <header className="header">
        <div className="container-fluid">
          <Link to="/">
            <Icon />
            <span>Lee</span>
          </Link>
          <ul>
            <li className="nav-languages">
              <Link
                className={
                  context.state.language === "en" ? "link-active" : "link"
                }
                onClick={context.changeLanguage}
                data-language="en"
                href="/#"
              >
                ENG
              </Link>
            </li>
            <li className="nav-languages">
              <Link
                className={
                  context.state.language === "kr" ? "link-active" : "link"
                }
                onClick={context.changeLanguage}
                data-language="kr"
                href="/#"
              >
                한국어
              </Link>
            </li>
          </ul>
          <nav className="nav-wrapper">
            <div id="jsNav" className="js-nav nav">
              <ul className="nav-list">
                <li>
                  <Link className="link" to="/" onClick={context.toggleNav}>
                    {context.state.data.nav.home}
                  </Link>
                </li>

                <li>
                  <Link
                    className="link"
                    to="/about"
                    onClick={context.toggleNav}
                  >
                    {context.state.data.nav.about}
                  </Link>
                </li>

                <li>
                  <Link
                    className="link"
                    to="/testimonials"
                    onClick={context.toggleNav}
                  >
                    {context.state.data.nav.testimonials}
                  </Link>
                </li>
              </ul>
            </div>

            {
              <button
                id="btn"
                type="button"
                aria-label="Toggle navigation"
                className={context.toggleNav === "kr" ? "link-active" : "link"}
                onClick={function() {
                  document.getElementById("jsNav").classList.toggle("active");
                }}
              >
                menu
              </button>
            }
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
