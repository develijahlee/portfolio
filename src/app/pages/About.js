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
              <p>
                Born in South Korea and raised in the United States for 13
                years, I discovered my passion for website development in
                freshman year of college in 2015. What began as a hobby from
                making websites for college clubs became a passionate career
                interest that persisted for years as I found again and again
                that I loved coding and desgning websites.
              </p>
              <p>
                What I enjoy about my work is that there is always something to
                improve on. The field of website development, like all internet
                technologies, is relatively young and is continuously innovating
                to provide better experiences for users.
              </p>
            </div>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default About;
