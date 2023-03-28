/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "../../common/components/Button/Button";
import Link from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import useAppDispatch from "../../common/hooks/useAppDispatch";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import { initializeYoutubeData } from "../../common/reducers/youtube/youtube-reducer";
import selectYoutube from "../../common/reducers/youtube/youtube-selectors";
import URL from "../../common/types/url-types";
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
        <Link href={"#"} type={LinkTypes.BUTTON}>
          <Button label="Visit my Youtube channel" />
        </Link>
      </div>
      <div
        ref={animationRef}
        className="blog__billboard-container"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="blog__billboard blog__billboard-right">
          <div className="blog__billboard-content">
            Programación Accesible ©
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
