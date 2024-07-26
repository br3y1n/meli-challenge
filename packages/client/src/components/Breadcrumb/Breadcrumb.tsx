import { Link } from "@components/Link";
import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IBreadcrumbProps } from "./Breadcrumb.interfaces";

const Breadcrumb = ({ items }: IBreadcrumbProps) => {
  return (
    <div className="flex gap-0.5 flex-wrap items-center">
      {items.map(({ label, onClick }, idx) => (
        <Fragment key={idx}>
          <Link onClick={onClick}>{label}</Link>

          {items.length - 1 > idx && (
            <IoIosArrowForward className="h-[12px] w-auto text-gray-light" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export { Breadcrumb };
