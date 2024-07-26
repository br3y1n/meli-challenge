"use client";
import { defaultAccessibilityProperties } from "@constants/defaultAccessibilityProperties";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { ISelectProps } from "./Select.interfaces";
import { useSelectState } from "./state";

const Select = <T,>(props: ISelectProps<T>) => {
  const { options, onChange } = props;
  const { closeSelect, toggleOpen, open, optionSelected } =
    useSelectState(props);

  return (
    <div
      className="p-2 cursor-pointer text-gray-dark hover:text-blue-light flex gap-2 items-center relative min-w-[50px]"
      onClick={toggleOpen}
      {...defaultAccessibilityProperties}
    >
      <p className="text-sm">{optionSelected?.label}</p>
      <IoIosArrowDown
        className={clsx(
          "text-blue-light h-[15px] transition",
          open && "rotate-180"
        )}
      />

      {open && (
        <ul className="absolute top-full bg-white right-0 min-w-full max-w-[120%] z-50 rounded-md overflow-hidden shadow-md max-h-[111px] overflow-y-auto">
          {options.map((option, idx) => {
            const isSelectedOption = option === optionSelected;
            const { label, value: optionValue } = option;

            return (
              <li
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isSelectedOption) {
                    onChange && onChange(optionValue);
                    closeSelect();
                  }
                }}
                {...defaultAccessibilityProperties}
                className={clsx(
                  "border-b py-2 px-3 border-gray-extra-light last:border-none text-sm relative",
                  isSelectedOption
                    ? "text-blue-light hover:text-blue-light cursor-default font-bold text-md before:border-blue-light before:border-l before:absolute before:top-0 before:left-0 before:h-full"
                    : "hover:text-gray-dark text-gray-dark hover:bg-black/5 hover:before:absolute hover:before:h-full hover:before:border-blue-300 hover:before:border-l hover:before:top-0 hover:before:left-0 hover:before:border-[3px]"
                )}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Select };
