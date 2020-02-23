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
import Footer from "./components/Footer";

// Component Implementation
const Main = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <Header context={context} />
          <Route exact={true} path="/" component={Home} />
<<<<<<< HEAD
          <Route exact={true} path="/home" component={Home} />
=======
>>>>>>> bf686fcb6e918e8e35b42ff103b6d15d6e20e271
          <Route exact={true} path="/testimonials" component={Testimonials} />
          <Route exact={true} path="/about" component={About} />
          <Footer context={context} />
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default Main;
