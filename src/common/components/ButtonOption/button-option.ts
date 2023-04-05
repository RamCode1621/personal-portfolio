export type ButtonProps = {
  label: string;
  path: string;
  type: "optionMenu" | "linkBotton";
};

export type ButtonOptionProps = {
  label: string;
  path?: string;
  internalPath?: string;
  type: "optionMenu" | "linkBotton";
};
