import { useState } from "react";
import { ISelectProps } from "../Select.interfaces";

const useSelectState = <T>({ options, value }: ISelectProps<T>) => {
  const optionSelected = options.find(
    ({ value: optionValue }) => value === optionValue
  );
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prevValue) => !prevValue);
  const closeSelect = () => {
    setOpen(false);
  };

  return { closeSelect, toggleOpen, open, optionSelected };
};

export { useSelectState };
