import React, { useRef } from "react";
import { LogoSize } from "../../common/components/Logos/logos-types";
import ReactJsLogo from "../../common/components/Logos/social/ReactJsLogo";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import URL from "../../common/types/url-types";
import GitHubLogo from "../../common/components/Logos/social/GitHubLogo";

const MyBlog = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.HOME);

  return (
    <div ref={ref} className="myBlog">
      <div className="myBlog-container">
        <Title
          title="Hi, Welcome to my blog channel"
          subtitle="There are my latest posts"
        />
      </div>
      <div className="myBlog__box-container">
        <Box
          title="Creating ReactJs components with Typescript"
          description="In this post we learn how to create a ReactJs component with Typescript"
          tags={["ReactJs", "Typescript"]}
          image={ReactJsLogo}
          imageSize={LogoSize.SMALL}
          url="/blog/creating-reactjs-components-with-typescript"
          internalLink={true}
        />
        <Box
          title="How use Fetch API with ReactJs"
          description="In this post we learn how to use Fetch API with ReactJs"
          tags={["ReactJs", "Typescript", "Fetch API"]}
          image={ReactJsLogo}
          imageSize={LogoSize.SMALL}
          url="/blog/how-use-fetch-api-with-reactjs"
          internalLink={true}
        />
        <Box
          title="How configura SSH autentication in Git for Github"
          description="In this post we learn how to configure SSH autentication in Git for Github"
          tags={["Git", "Github", "SSH", "Shell"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url="/blog/how-use-fetch-api-with-reactjs"
          internalLink={true}
        />
        <Box
          title="Learn to use Git "
          description="In this post we learn how to configure SSH autentication in Git for Github"
          tags={["Git", "Github", "Shell"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url="/blog/how-use-fetch-api-with-reactjs"
          internalLink={true}
        />
      </div>
    </div>
  );
};

export default MyBlog;
