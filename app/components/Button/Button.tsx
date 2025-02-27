import React from "react";
import button from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  title: string;
}
const Button = ({ className, title }: ButtonProps) => {
  return <div className={`${button.btn} ${className}`}>{title}</div>;
};

export default Button;
