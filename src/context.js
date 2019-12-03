// src/context.js

// Import translations
import translationEN from "./translations/en";
import translationKR from "./translations/kr";

import React, { Component } from "react";

// Create new context
export const MyContext = React.createContext();

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    isNavOpen: false,
    language: "en",
    data: translationEN
  };

  changeLanguage = e => {
    let language = e.target.dataset.language;
    let data;
    if (language === "en") {
      data = translationEN;
    } else if (language === "kr") {
      data = translationKR;
    } else {
      data = translationEN;
    }
    this.setState({
      language: language,
      data: data
    });
  };

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeLanguage: this.changeLanguage,
          toggleNav: this.toggleNav
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
