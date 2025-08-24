import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import style from "./index.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "filled"
    | "outlined"
    | "filled-inverse"
    | "filled-light-hover"
    | "outlined-light";
  size: "small" | "nav"; // button size
  label: ReactNode;
  className?: string;
}

export const Button = ({
  label,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(style.button, style[variant], style[size], className)}
      {...rest}
    >
      <span className="ik-misc--button z-10">{label}</span>
      <div className={style.buttonBg}>
        <div className={style.buttonHoverBg} />
      </div>
    </button>
  );
};
