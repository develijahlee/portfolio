// src/app/components/Header.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.js";
import Kebab from "./Kebab.js";

class Header extends Component {
  render() {
    let { context } = this.props;

    // Open/Closes Navigation
    const toggleNav = () => {
      document.getElementById("jsNav").classList.toggle("jsNav-active");
      document.getElementById("kebab").classList.toggle("btn-active");
    };

    return (
      <header>
        <nav className="nav">
          <div className="nav__bar">
            <Link to="/" onClick={toggleNav}>
              <Logo />
            </Link>
            <ul className="languages">
              <li>
                <Link
                  className={
                    context.state.language === "en" ? "link-active" : "link"
                  }
                  onClick={context.changeLanguage}
                  data-language="en"
                  to="/#"
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
                <Link className="link" to="/" onClick={toggleNav}>
                  {context.state.data.nav.home}
                </Link>
              </li>

              <li>
                <Link className="link" to="/about" onClick={toggleNav}>
                  {context.state.data.nav.about}
                </Link>
              </li>

              <li>
                <Link className="link" to="/testimonials" onClick={toggleNav}>
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
