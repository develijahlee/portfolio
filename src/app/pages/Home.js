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
          <section>
            <div className="container container--home">
              <div className="intro intro--home">
                <h1>{context.state.data.home.name}</h1>

                <p>{context.state.data.home.p1}</p>
                <p>{context.state.data.home.p2}</p>
                <button className="btn btn--cv">
                  {context.state.data.home.cv}
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
            </div>
          </section>
          <section>
            <div className="projects">
              <ul className="projects__list">
                <li>
                  <a
                    className="yonsei"
                    href="https://develijahlee.github.io/uic/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                  >
                    <img src={scribe} alt="UIC Scribe Logo" />
                  </a>
                  <h3>UIC Scribe</h3>
                </li>
              </ul>
            </div>
          </section>
          <section className="contact">
            <div className="container container--contact">
              <h1>{context.state.data.home.contact}</h1>
              <form action="https://formspree.io/you@email.com">
                <label for="name">{context.state.data.home.form_name}</label>
                <input type="text" name="name" />
                <label for="email">{context.state.data.home.form_email}</label>
                <input type="email" name="_replyto" />
                <label for="message">
                  {context.state.data.home.form_message}
                </label>
                <textarea name="message" cols="30" rows="10" />
                <input
                  type="submit"
                  value={context.state.data.home.form_button}
                  className="btn btn--form"
                />
              </form>
            </div>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default Home;
