// src/app/components/Header.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import CSS
import "../styles/components/header.css";

class Header extends Component {
  render() {
    let { context } = this.props;
    return (
      <header className="header">
        <div className="container-fluid">
          <ul>
              <li className="nav-languages">
                  <a
                    className={
                      context.state.language === "en" ? "link-active" : "link"
                    }
                    onClick={context.changeLanguage}
                    data-language="en"
                  >
                    ENG
                  </a>

              </li>
              <li className="nav-languages">
                  <a
                    className={
                      context.state.language === "kr" ? "link-active" : "link"
                    }
                    onClick={context.changeLanguage}
                    data-language="kr"
                  >
                    한국어
                  </a>
              </li>
          </ul>
          <nav className="nav-wrapper">
            {context.state.isNavOpen && (
              <div className="js-nav nav">
              
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
            )}

            {
              <button
                className={
                  context.state.isNavOpen
                    ? "nav-toggler nav-toggler--open"
                    : "nav-toggler"
                }
                type="button"
                aria-label="Toggle navigation"
                onClick={context.toggleNav}
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
