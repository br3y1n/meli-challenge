import clsx from "clsx";
import { TButtonProps } from "./Button.interfaces";
import { variantMap } from "./constants";

const Button = ({
  variant,
  className,
  children,
  rightContent,
  leftContent,
  ...otherProps
}: TButtonProps) => {
  return (
    <button
      className={clsx(className, variant && variantMap[variant])}
      {...otherProps}
    >
      {leftContent}
      {children}
      {rightContent}
    </button>
  );
};

export { Button };
