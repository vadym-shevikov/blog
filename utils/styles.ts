import { twMerge, ClassNameValue } from "tailwind-merge";

export const classes = (...classNames: ClassNameValue[]) => {
  return twMerge(classNames.filter(Boolean));
};
