import React, { FC } from "react";
import Link from "../../common/components/Link/Link";
import Palette from "../Palette/Palette";

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__container">
      {`Richard Aguilar © ${new Date().getFullYear()} `}
      <b>
        <Link href={"https://gabrielcodigo.com/#/dashboard/"}>
          Gabriel Codigo
        </Link>
      </b>
      <Palette />
    </div>
  </footer>
);

export default Footer;
