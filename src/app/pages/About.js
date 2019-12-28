// src/app/pages/About.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

const About = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <main>
          <section>
            <div className="container container--about">
              <h1>{context.state.data.about.h1}</h1>
              <p>{context.state.data.about.p}</p>
            </div>
          </section>
          <section className="history">
            <div className="container container--about">
              <p>{context.state.data.about.methodology}</p>
              <p>{context.state.data.about.tools}</p>
            </div>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default About;
