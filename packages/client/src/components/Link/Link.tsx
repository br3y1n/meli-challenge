import { defaultAccessibilityProperties } from "@constants/defaultAccessibilityProperties";
import clsx from "clsx";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

const Link = ({
  className,
  children,
  ...otherProps
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => (
  <a
    className={clsx(
      className,
      "text-sm text-gray-light hover:text-gray-dark cursor-pointer"
    )}
    {...defaultAccessibilityProperties}
    {...otherProps}
  >
    {children}
  </a>
);

export { Link };
