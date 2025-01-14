import React, { FC } from "react";
import ExtarnalLink from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";
import Logo from "../../common/components/Logos/Logo";
import { BoxProps } from "./box-types";
import { Link } from "react-router-dom";

const Box: FC<BoxProps> = ({
  title,
  description,
  tags,
  image,
  imageSize,
  url,
  internalLink,
}) =>
  !internalLink ? (
    <ExtarnalLink href={url} type={LinkTypes.BUTTON}>
      <div className="box__container">
        <div className="box__title-container">
          <Logo size={imageSize} image={image} />
          <div className="box__title">{title}</div>
        </div>
        <div className="box__description">{description}</div>
        <div className="box__tags">
          {tags.map((tag) => (
            <div key={tag} className="box__tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </ExtarnalLink>
  ) : (
    <Link to={url}>
      <div className="box__container">
        <div className="box__title-container">
          <Logo size={imageSize} image={image} />
          <div className="box__title">{title}</div>
        </div>
        <div className="box__description">{description}</div>
        <div className="box__tags">
          {tags.map((tag) => (
            <div key={tag} className="box__tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );

export default Box;
