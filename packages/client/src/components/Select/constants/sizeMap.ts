import { SelectSizeEnum } from "../Select.interfaces";

const sizeMap: Record<SelectSizeEnum, { text: string; icon: string }> = {
  [SelectSizeEnum.MD]: {
    icon: "h-[17px]",
    text: "text-md",
  },
  [SelectSizeEnum.SM]: {
    icon: "h-[15px]",
    text: "text-sm",
  },
};

export { sizeMap };
