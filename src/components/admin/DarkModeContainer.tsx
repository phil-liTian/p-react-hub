import clsx from "clsx";
import type React from "react";

interface Props extends React.ComponentProps<"div"> {}

const DarkModeContainer = ({ children, className }: Props) => {
  return <div className={clsx("bg-container", className)}>{children}</div>;
};

export default DarkModeContainer;
