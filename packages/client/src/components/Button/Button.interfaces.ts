import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

enum ButtonVariantEnum {
  PRIMARY = "primary",
  DEFAULT = "default",
  PRIMARY_PALE = "primary_pale",
  PRIMARY_PALE_GHOST = "primary_pale_ghost",
  DEFAULT_PRIMARY_PALE = "default_primary_pale",
}

interface ButtonProps {
  variant?: ButtonVariantEnum;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonProps;

export { ButtonVariantEnum };
export type { TButtonProps };
