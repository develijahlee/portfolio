// src/app/Main.jsx

// Imports
import React from "react";
import { Route } from "react-router-dom";

// Import Context
import { MyContext } from "../context";

// Import pages
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";

// Import components
import Header from "./components/Header";

// Import CSS
import "./sass/index.scss";

// Component Implementation
const Main = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <Header context={context} />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/testimonials" component={Testimonials} />
          <Route exact={true} path="/about" component={About} />
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default Main;
