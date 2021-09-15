import React, { ButtonHTMLAttributes } from "react";

type TPattern = "number" | "clear" | "oprator" | "equality";

interface IProps {
  pattern?: TPattern;
}

const Button = ({
  pattern = "number",
  children,
  className,
  ...props
}: IProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`btn btn-${pattern}${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
