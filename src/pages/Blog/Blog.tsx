/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from "react";
import Button from "../../common/components/Button/Button";
import LinkComponent from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
// import { Link } from "react-router-dom";
import ButtonOption from "../../common/components/ButtonOption/ButtonOption";

import Title from "../../components/Title/Title";

const Blog = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.BLOG);
  const animationEntry = useIntersectionObserver(animationRef, {
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="blog">
      <div className="blog__description-container">
        <Title title="My blog" />
        <p className="blog__description">
          On my blog channel I share what I know about{" "}
          <b>frontend, coding and devops</b>and any topic about the world of
          software development.
        </p>
        <p className="blog__description">
          It&apos;s a place where I can <b>help</b> others while I also{" "}
          <b>learn</b> new stuff and get to practice what I already know. Wanna
          have a look?
        </p>
        <LinkComponent href={"/blog"} type={LinkTypes.INTERNAL}>
          <Button label="Visit my blog" />
        </LinkComponent>
      </div>
      <div
        ref={animationRef}
        className="blog__billboard-container"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="blog__billboard blog__billboard-right">
          <div className="blog__billboard-content">
            <img
              src="https://imgs.search.brave.com/T-tw3-kd1-cGF9VslX67G6QBNDI8apjyLz2KTR2McT8/rs:fit:1100:843:1/g:ce/aHR0cHM6Ly93d3cu/Z2lsbHNvbHV0aW9u/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMTIvYmxv/Zy10by1pbXByb3Zl/LXNlby1yZXN1bHRz/LmpwZWc"
              alt="blog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
