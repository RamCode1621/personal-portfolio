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

const YouTube = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.YOUTUBE);
  const animationEntry = useIntersectionObserver(animationRef, {
    freezeOnceVisible: true,
  });
  const dispatch = useAppDispatch();
  // const youtubeData = useSelector(selectYoutube());

  useEffect(() => {
    dispatch(initializeYoutubeData());
  }, []);

  return (
    <div ref={ref} className="youtube">
      <div className="youtube__description-container">
        <Title title="My Youtube channel" />
        <p className="youtube__description">
          On my Youtube channel{" "}
          <b>
            <Link href={URL.YOUTUBE}> "Link to my channel "</Link>
          </b>{" "}
          I share what I know about <b>programming</b>.
        </p>
        <p className="youtube__description">
          It&apos;s a place where I can <b>help</b> others while I also{" "}
          <b>learn</b> new stuff and get to practice what I already know. Wanna
          have a look?
        </p>
        <Link href={URL.YOUTUBE} type={LinkTypes.BUTTON}>
          <Button label="Visit my Youtube channel" />
        </Link>
      </div>
      <div
        ref={animationRef}
        className="youtube__billboard-container"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="youtube__billboard youtube__billboard-right">
          <div className="youtube__billboard-content">
            <img
              src="https://imgs.search.brave.com/DwKXOjnINqg8e6_AYRFFweLLYth0LUeDFNP5oDpOPwc/rs:fit:400:300:1/g:ce/aHR0cHM6Ly93d3cu/d2FrZXRlY2guZWR1/L3NpdGVzL2RlZmF1/bHQvZmlsZXMvc3R5/bGVzLzE2eDlfbWRf/MV80MDBfeF8yNjVf/L3B1YmxpYy9wcm9n/cmFtLWltYWdlcy8x/Nng5L0NvbXB1dGVy/UHJvZ3JhbW1pbmcx/Nng5LmpwZz9pdG9r/PS12VzVqV2Mz"
              alt="Computer programming"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
