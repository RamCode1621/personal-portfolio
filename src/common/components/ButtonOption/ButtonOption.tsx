import React, { FC } from "react";
import { ButtonProps } from "./button-option";

const ButtonOption: FC<ButtonProps> = ({ label }) => (
  <button className="buttonOption" type="button">
    {label}
  </button>
);

export default ButtonOption;
