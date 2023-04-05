import React, { FC } from "react";
import ButtonOption from "../../common/components/ButtonOption/ButtonOption";
// import useAutoScroll from "../../common/hooks/useAutoScroll";

const Menu: FC = () => {
  // const { handleScroll } = useAutoScroll();
  return (
    <div className="menu">
      <ButtonOption label="Wellcome" path="/" type="optionMenu" />
      {/* <ButtonOption label="About me" path="" />
      <ButtonOption label="My experience" path="" />
      <ButtonOption label="My projects" path="" /> */}
      <ButtonOption label="Blog" path="/blog" type="optionMenu" />
    </div>
  );
};

export default Menu;
