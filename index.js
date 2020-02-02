// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

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
      <HashRouter>
        <Main />
      </HashRouter>
    </MyProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
