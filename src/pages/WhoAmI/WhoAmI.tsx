/* eslint-disable max-len */
import React, { useRef } from "react";
import Button from "../../common/components/Button/Button";
import Link from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import Title from "../../components/Title/Title";

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="whoami">
      <div className="whoami__container">
        <Title title="About me" subtitle="Professional profile" />
        <p>
          Hi! My name is <b>Richard</b>, I build web stuff. I have more than 1
          years of experience as a FullStack web developer and programming in
          general.
        </p>
        <p>
          I like to make applications from the <b>design</b> phase to deployment
          with Typescript <b>code</b>.
        </p>
        <Link
          href="https://www.linkedin.com/in/richardaguillar/"
          type={LinkTypes.BUTTON}
        >
          <Button label="Contact me!" />
        </Link>
      </div>
      <div
        className="whoami__moving-border"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="whoami__concept whoami__concept--design">Coding</div>
        <div className="whoami__concept whoami__concept--coding">DevOps</div>
      </div>
    </div>
  );
};

export default WhoAmI;
