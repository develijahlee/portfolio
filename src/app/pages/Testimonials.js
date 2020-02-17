// src/app/pages/Testimonials.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

// Import images
import quote from "../img/testimonials/quote.png";

const Testimonials = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <main>
          <section>
            <div className="container container--testimonials">
              <h1>{context.state.data.testimonials.h1}</h1>
              <p>{context.state.data.testimonials.p}</p>
            </div>
          </section>
          <section className="cards">
            <div className="container">
              <blockquote>
                <img src={quote} alt="quotation marks" />
                <p>{context.state.data.testimonials.t1p1}</p>
                <p className="signature">
                  <span className="name">{context.state.data.testimonials.t1name}</span>
                  <span className="workplace">{context.state.data.testimonials.t1workplace}</span>
                </p>
              </blockquote>
              <blockquote>
                <img src={quote} alt="quotation marks" />
                <p>{context.state.data.testimonials.t2p1}</p>
                <p>{context.state.data.testimonials.t2p2}</p>
                <p>{context.state.data.testimonials.t2p3}</p>
                <p className="signature">
                  <span className="name">{context.state.data.testimonials.t2name}</span>
                  <span className="workplace">{context.state.data.testimonials.t2workplace}</span>
                </p>
              </blockquote>
              {/*
              <blockquote>
                <img src={quote} alt="quotation marks" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse tristique eros tortor, nec elementum magna mollis
                  vel. Nunc quis lorem ornare velit luctus volutpat. Nunc
                  scelerisque magna metus.
                </p>
                <p>
                  Donec at luctus ante, id eleifend neque. Nulla sit amet
                  aliquet felis, et cursus nisl. Aliquam fringilla enim non
                  ligula lacinia volutpat. Aliquam commodo cursus ullamcorper.
                  Mauris et varius erat.
                </p>
                <p className="signature">
                  <span className="name">Andy Lee</span>
                  <span className="workplace">Yonsei University</span>
                </p>
              </blockquote>
              */} 
            </div>
          </section>
        </main>
      )}
    </MyContext.Consumer>
  );
};

export default Testimonials;
