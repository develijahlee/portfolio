// src/app/pages/Home.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

// Import images
import yonsei from "../img/yonsei-logo.png";
import scribe from "../img/scribe-logo.png";

const Home = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <main>
          <section className="container container--home">
            <div className="intro intro--home">
              <h1>{context.state.data.home.h1}</h1>

              <p>{context.state.data.home.p1}</p>
              <p>{context.state.data.home.p2}</p>
              <button className="btn btn--cv">
                {context.state.data.home.button}
              </button>
            </div>
            <div className="code">
              <code className="status">
                <p>{"{"}</p>
                <p className="indent">"name": Elijah Lee,</p>
                <p className="indent">"occupation": frontend developer,</p>
                <p className="indent">"for_hire": true</p>
                <p>{"}"}</p>
              </code>
            </div>
          </section>
          <section className="projects">
            <ul>
              <li>
                <a
                  className="yonsei"
                  href="develijahlee.github.io/uic"
                  target="_blank"
                >
                  <img src={yonsei} alt="Yonsei University Logo" />
                </a>
              </li>
              <li>
                <a
                  className="scribe"
                  href="yonseiuicscribe.com"
                  target="_blank"
                >
                  <img src={scribe} alt="UIC Scribe Logo" />
                </a>
              </li>
            </ul>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default Home;
