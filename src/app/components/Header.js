// src/app/components/Header.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.js";
import Kebab from "./Kebab.js";

class Header extends Component {
  render() {
    let { context } = this.props;

    // Open/closes navigation
    const toggleNav = () => {
      document.getElementById("jsNav").classList.toggle("jsNav-active");
      document.getElementById("kebab").classList.toggle("btn-active");
    };

    // Prevents navigation from opening when logo is clicked
    const closeNav = () => {
      document.getElementById("jsNav").classList.remove("jsNav-active");
      document.getElementById("kebab").classList.remove("btn-active");
    };

    return (
      <header>
        <nav className="nav">
          <div className="nav__bar">
            <Link to="/" onClick={closeNav}>
              <Logo />
            </Link>
            <ul className="languages">
              <li>
                <Link
                  onClick={context.changeLanguage}
                  data-language="en"
                  to="/#"
                >
                  ENG
                </Link>
              </li>
              <li>
                <Link
                  onClick={context.changeLanguage}
                  data-language="kr"
                  to="/#"
                >
                  한국어
                </Link>
              </li>
            </ul>
            <button
              id="kebab"
              type="button"
              aria-label="Toggle navigation"
              className="btn"
              onClick={toggleNav}
            >
              <Kebab />
            </button>
          </div>
          <div id="jsNav" className="nav__cabinet">
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={toggleNav}>
                  {context.state.data.nav.home}
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={toggleNav}>
                  {context.state.data.nav.about}
                </Link>
              </li>

              <li>
                <Link to="/testimonials" onClick={toggleNav}>
                  {context.state.data.nav.testimonials}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
