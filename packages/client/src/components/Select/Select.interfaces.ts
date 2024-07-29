enum SelectSizeEnum {
  SM = "sm",
  MD = "md",
}

enum SelectPostionEnum {
  TOP = "top",
  BOTTOM = "bottom",
}

interface SelectOption<T> {
  label: string;
  value: T;
}

interface ISelectProps<T> {
  options: SelectOption<T>[];
  value: T;
  onChange?: (value: T) => void;
  size?: SelectSizeEnum;
  position?: SelectPostionEnum;
}

export { SelectPostionEnum, SelectSizeEnum };
export type { ISelectProps };
