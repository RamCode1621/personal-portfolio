import React, { FC } from "react";
import { HeaderProps } from "./header-types";

const Header: FC<HeaderProps> = ({ children }) => (
  <header className="header">{children}</header>
);

export default Header;
