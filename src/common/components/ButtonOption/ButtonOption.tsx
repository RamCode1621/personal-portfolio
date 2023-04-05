import React, { FC, useRef } from "react";
import { ButtonOptionProps, ButtonProps } from "./button-option";
import { Link } from "react-router-dom";
import useAutoScroll from "../../hooks/useAutoScroll";

const ButtonOption: FC<ButtonProps> = ({
  label,
  path,
  type,
}: ButtonOptionProps) => {
  const { handleScroll } = useAutoScroll();
  return (
    <Link to={path ? path : "#"}>
      <button
        className={`buttonOption ${
          type === "optionMenu"
            ? "type-button"
            : type === "linkBotton"
            ? "link"
            : null
        }`}
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
