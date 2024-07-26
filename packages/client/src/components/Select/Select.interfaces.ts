interface SelectOption<T> {
  label: string;
  value: T;
}

interface ISelectProps<T> {
  options: SelectOption<T>[];
  value: T;
  onChange?: (value: T) => void;
}

export type { ISelectProps };
