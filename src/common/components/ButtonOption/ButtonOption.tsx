import React, { FC, useRef } from "react";
import { ButtonOptionProps, ButtonProps } from "./button-option";
import { Link } from "react-router-dom";
import useAutoScroll from "../../hooks/useAutoScroll";

const ButtonOption: FC<ButtonProps> = ({ label, path }: ButtonOptionProps) => {
  const { handleScroll } = useAutoScroll();
  return (
    <Link to={path ? path : "#"}>
      <button
        className="buttonOption"
        type="button"
        onClick={() => {
          handleScroll();
        }}
      >
        {label}
      </button>
    </Link>
  );
};

export default ButtonOption;
