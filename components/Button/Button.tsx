import React, { forwardRef } from "react";
import { Spacing } from "../Spacing";
import { Spinner } from "../Spinner/Spinner";
import styles from "./styles.module.css";

const ButtonForward: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    loading?: boolean;
    secondary?: boolean;
    style?: React.CSSProperties;
    className?: string;
  }
> = (
  { onClick, disabled, children, loading, secondary, style, className },
  ref
) => {
  return (
    <button
      ref={ref}
      className={[
        styles.button,
        secondary ? styles.secondarybutton : undefined,
        className ? className : undefined,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {loading && (
        <>
          <Spinner size={20}></Spinner>
          <Spacing></Spacing>
        </>
      )}
      {children}
    </button>
  );
};

export const Button = forwardRef(ButtonForward);
