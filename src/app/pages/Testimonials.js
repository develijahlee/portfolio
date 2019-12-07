// src/app/pages/Testimonials.js

import React from "react";

// Import context and provider
import { MyContext } from "../../context";

const Testimonials = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>
            {context.state.data.testimonials.h1}
          </h1>

          <h2>
            {context.state.data.testimonials.h2}
          </h2>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Testimonials;
