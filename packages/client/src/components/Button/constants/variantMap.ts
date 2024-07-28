import { ButtonVariantEnum } from "../Button.interfaces";

const variantMap: Record<ButtonVariantEnum, string> = {
  [ButtonVariantEnum.PRIMARY]:
    "bg-blue-light rounded text-white hover:bg-blue-dark disabled:bg-blue-400 disabled:cursor-progress",
  [ButtonVariantEnum.DEFAULT]:
    "active:ring active:ring-black rounded hover:bg-black/5 text-gray-light",
  [ButtonVariantEnum.DEFAULT_PRIMARY_PALE]:
    "hover:bg-blue-pale-dark rounded text-gray-light",
  [ButtonVariantEnum.PRIMARY_PALE]:
    "bg-blue-pale-light rounded text-blue-light hover:bg-blue-pale-dark",
  [ButtonVariantEnum.PRIMARY_PALE_GHOST]:
    "bg-white rounded hover:bg-blue-pale-light border border-blue-light border-[2px]",
};

export { variantMap };
