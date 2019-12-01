// src/app/pages/Home.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

const Home = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <section>
          <h1>{context.state.data.home.h1}</h1>

          <p>{context.state.data.home.p1}</p>
          <p>{context.state.data.home.p2}</p>
          <button>{context.state.data.home.button}</button>
          <pre>
            <code>
              "name": "Nobuo Uematsu", "occupation": "Video game composer",
              "available_for_hire:" true
            </code>
          </pre>
        </section>
      )}
    </MyContext.Consumer>
  );
};

export default Home;
