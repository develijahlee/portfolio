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
      document.getElementById("kebab").classList.toggle("kebab-active");
    };

    // Prevents navigation from opening when logo is clicked
    const closeNav = () => {
      document.getElementById("jsNav").classList.remove("jsNav-active");
      document.getElementById("kebab").classList.remove("kebab-active");
    };

    return (
      <header>
        <nav className="nav">
          <div className="nav__bar">
<<<<<<< HEAD
            <Link to="/home" onClick={closeNav} aria-label="Return to homepage">
=======
            <Link to="/" onClick={closeNav} aria-label="Return to homepage">
>>>>>>> bf686fcb6e918e8e35b42ff103b6d15d6e20e271
              <Logo />
            </Link>
            <ul className="languages">
              <li>
                <Link
                  onClick={context.changeLanguage}
                  data-language="en"
                  aria-label="Change language to English"
                >
                  ENG
                </Link>
              </li>
              <li>
                <Link
                  onClick={context.changeLanguage}
                  data-language="kr"
                  aria-label="Change language to Korean"
                >
                  한국어
                </Link>
              </li>
            </ul>
            <button
              id="kebab"
              type="button"
              aria-label="Toggle navigation"
              className="kebab"
              onClick={toggleNav}
            >
              <Kebab />
            </button>
          </div>
          <div id="jsNav" className="nav__cabinet">
            <ul className="nav-list">
              <li>
<<<<<<< HEAD
                <Link to="/home" onClick={toggleNav}>
=======
                <Link to="/" onClick={toggleNav}>
>>>>>>> bf686fcb6e918e8e35b42ff103b6d15d6e20e271
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
