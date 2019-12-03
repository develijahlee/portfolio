// src/app/components/Header.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.js";

class Header extends Component {
  render() {
    let { context } = this.props;
    return (
      <header>
        <div>
          <Link to="/">
            <Icon />
            <span>Lee</span>
          </Link>
          <ul className="nav-languages">
            <li>
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
            <li>
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
          <nav>
            <div id="jsNav">
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
