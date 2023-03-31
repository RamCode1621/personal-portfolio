/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="post-container">
        <h1 className="post__title">
          Creating ReactJs components with Typescript
        </h1>

        <div className="post__content">
          <p>
            In this post we learn how to create a ReactJs component with
            Typescript. We will create a component that will receive a title and
            a subtitle and will display them in a box.
          </p>
          <p>
            First we create a new folder in the src folder called components and
            inside we create a new folder called Box. Inside the Box folder we
            create a new file called Box.tsx.
          </p>
          <p>
            In the Box.tsx file we create a new component called Box. This
            component will receive a title and a subtitle and will display them
            in a box.
          </p>
          <p>The Box.tsx file will look like this:</p>
          <pre>
            <code>
              {`
import React from "react";
import "./Box.scss";

interface BoxProps {
  title: string;
  subtitle: string;
} 

const Box = ({ title, subtitle }: BoxProps) => {
  return (
    <div className="box">

      <div className="box__title">
        {title}
      </div>

      <div className="box__subtitle">
        {subtitle}
      </div>

    </div>
  );
};

export default Box;
        `}
            </code>
          </pre>
          <p>
            In the Box.tsx file we create a new component called Box. This
            component will receive a title and a subtitle and will display them
            in a box.
          </p>
          <p>The Box.tsx file will look like this:</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
