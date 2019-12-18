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
            <ul className="projects__list">
              <li>
                <a
                  className="yonsei"
                  href="https://develijahlee.github.io/uic/"
                  target="_blank"
                >
                  <img src={yonsei} alt="Yonsei University Logo" />
                </a>
                <h3>Underwood International College</h3>
              </li>
              <li>
                <a
                  className="scribe"
                  href="https://yonseiuicscribe.com"
                  target="_blank"
                >
                  <img src={scribe} alt="UIC Scribe Logo" />
                </a>
                <h3>UIC Scribe</h3>
              </li>
            </ul>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default Home;
