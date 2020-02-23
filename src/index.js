// src/index.js

import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> bf686fcb6e918e8e35b42ff103b6d15d6e20e271

// Import service workers
import registerServiceWorker from "./registerServiceWorker";

// Import context provider
import { MyProvider } from "./context";

// Import Main component
import Main from "./app/Main";

// Import CSS
import "./app/sass/index.scss";

// Create App component
const App = () => {
  return (
    <MyProvider>
<<<<<<< HEAD
      <HashRouter>
        <Main />
      </HashRouter>
=======
      <BrowserRouter>
        <Main />
      </BrowserRouter>
>>>>>>> bf686fcb6e918e8e35b42ff103b6d15d6e20e271
    </MyProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
