import React, { FC } from "react";
import ButtonOption from "../../common/components/ButtonOption/ButtonOption";

const Menu: FC = () => {
  return (
    <div className="menu">
      <ButtonOption label="Wellcome" />
      <ButtonOption label="About me" />
      <ButtonOption label="My projects" />
      <ButtonOption label="Blog" />
      <ButtonOption label="My experience" />
    </div>
  );
};

export default Menu;
