import { Button } from "@components/Button";
import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IBreadcrumbProps } from "./Breadcrumb.interfaces";

const Breadcrumb = ({ items }: IBreadcrumbProps) => {
  return (
    <div className="flex gap-0.5 flex-wrap items-center">
      {items.map(({ label, onClick, ariaLabel }, idx) => (
        <Fragment key={idx}>
          <Button
            onClick={onClick}
            className="text-sm text-gray-light hover:text-gray-dark"
            aria-label={ariaLabel}
          >
            {label}
          </Button>

          {items.length - 1 > idx && (
            <IoIosArrowForward className="h-[12px] w-auto text-gray-light" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export { Breadcrumb };
