import React, { useRef } from "react";
import { LogoSize } from "../../common/components/Logos/logos-types";
import GitHubLogo from "../../common/components/Logos/social/GitHubLogo";
import VimeoLogo from "../../common/components/Logos/social/VimeoLogo";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import URL from "../../common/types/url-types";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.PROJECTS);

  return (
    <div ref={ref} className="projects">
      <Title title="Some projects" subtitle="that I have been working on" />
      <div className="projects__box-container">
        <Box
          title="Web sockets API"
          description="In this backend project I used Nestjs creating a service web sockets for it's use in a chat app."
          tags={["Typescript", "Nestjs", "Websockets"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url={URL.WEBSOCKETS_API_REPO}
          internalLink={false}
        />
        <Box
          title="Out chat"
          description="This frontend aplication was created using React and web sockets, it's a chat app."
          tags={["Typescript", "ReactJs", "Websockets", "Redux"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url={URL.OUR_CHAT_REPO}
          internalLink={false}
        />
        <Box
          title="EcuadorianFoods"
          description="Mobile application for watch recipes of ecuadorian foods."
          tags={["Typecript", "React-Native", "Redux"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url={URL.HVS}
          internalLink={false}
        />
        <Box
          title="Waifu app"
          description="This is a web application for watch ramdom images of waifus for categories."
          tags={["Typescript", "ReactJs", "Redux"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url={URL.WAIFU_APP_REPO}
          internalLink={false}
        />
        <Box
          title="PokeWeb"
          description="This is a web application for watch information of pokemons."
          tags={["JavaScript", "React", "Firebase"]}
          image={GitHubLogo}
          imageSize={LogoSize.SMALL}
          url={URL.POCKECTDEX_REPO}
          internalLink={false}
        />
      </div>
    </div>
  );
};

export default Projects;
