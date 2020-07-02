// src/app/pages/About.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

// Import images
import html from "../img/skills/HTML.png";
import css from "../img/skills/css3.png";
import js from "../img/skills/js.png";
import gq from "../img/skills/graphql.png";
//import wp from "../img/skills/wp.png";
import react from "../img/skills/react.png";
import gatsby from "../img/skills/gatsby.png";
import netlify from "../img/skills/netlify.png";
import figma from "../img/skills/figma.png";

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
          <section className="workflow">
            <div className="container container--about">
              <p>{context.state.data.about.methodology}</p>
              <p>{context.state.data.about.tools}</p>
            </div>
          </section>
          <section className="tech">
            <h2>{context.state.data.about.h2}</h2>
            <div className="container container--skills">
              <figure>
                <img src={html} alt="HTML5 logo" />
                <figcaption>HTML5</figcaption>
              </figure>
              <figure>
                <img src={css} alt="CSS3 logo" />
                <figcaption>CSS3</figcaption>
              </figure>
              <figure>
                <img src={js} alt="JavaScript logo" />
                <figcaption>JavaScript</figcaption>
              </figure>
              <figure>
                <img src={gq} alt="GraphQL logo" />
                <figcaption>GraphQL</figcaption>
              </figure>
              <figure>
                <img src={react} alt="Reactjs logo" />
                <figcaption>Reactjs</figcaption>
              </figure>
              <figure>
                <img src={gatsby} alt="Gatsby logo" />
                <figcaption>Gatsby</figcaption>
              </figure>
              <figure>
                <img src={netlify} alt="Netlify logo" />
                <figcaption>Netlify</figcaption>
              </figure>
              <figure>
                <img src={figma} alt="Figma logo" />
                <figcaption>Figma</figcaption>
              </figure>
            </div>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default About;
