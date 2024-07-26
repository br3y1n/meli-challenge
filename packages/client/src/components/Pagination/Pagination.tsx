"use client";
import { Button, ButtonVariantEnum, TButtonProps } from "@components/Button";
import clsx from "clsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IPaginationProps } from "./Pagination.interfaces";
import { usePaginationState } from "./state";

const defaultIconProps = {
  className: "h-[15px] w-auto",
};

const CustomButton = ({
  label,
  ...props
}: TButtonProps & { label: string }) => (
  <Button
    variant={ButtonVariantEnum.DEFAULT_PRIMARY_PALE}
    className="flex py-1 px-2 items-center gap-2"
    {...props}
  >
    <span className="text-md">{label}</span>
  </Button>
);

const CustomPageButton = ({
  variant = ButtonVariantEnum.DEFAULT_PRIMARY_PALE,
  className,
  ...otherProps
}: TButtonProps) => (
  <Button
    className={clsx("h-[32px] w-[32px]", className)}
    variant={variant}
    {...otherProps}
  />
);

const AdditonalButton = ({
  left,
  right,
  ...props
}: TButtonProps & { left?: boolean; right?: boolean }) => {
  const renderPoints = () => <span>...</span>;
  return (
    <>
      {left && renderPoints()}
      <CustomPageButton {...props} />
      {right && renderPoints()}
    </>
  );
};

const Pagination = (props: IPaginationProps) => {
  const { currentPage, onChange, numberPages } = props;
  const {
    showBack,
    showFirstButton,
    minLimitMinOffset,
    buttonSlots,
    showLastButton,
    showNext,
  } = usePaginationState(props);

  return (
    <div className="flex flex-wrap gap-1 items-center justify-center">
      {showBack && (
        <CustomButton
          label="Anterior"
          onClick={() => onChange && onChange(currentPage - 1)}
          leftContent={<IoIosArrowBack {...defaultIconProps} />}
        />
      )}

      {showFirstButton && (
        <AdditonalButton
          onClick={() => onChange && onChange(minLimitMinOffset)}
          right
        >
          {minLimitMinOffset}
        </AdditonalButton>
      )}

      {buttonSlots.map((page) => (
        <CustomPageButton
          key={page}
          className={clsx(page === currentPage && "font-bold")}
          onClick={() => onChange && onChange(page)}
          variant={
            page === currentPage
              ? ButtonVariantEnum.PRIMARY_PALE_GHOST
              : undefined
          }
        >
          {page}
        </CustomPageButton>
      ))}

      {showLastButton && (
        <AdditonalButton onClick={() => onChange && onChange(numberPages)} left>
          {numberPages}
        </AdditonalButton>
      )}

      {showNext && (
        <CustomButton
          label="Siguiente"
          onClick={() => onChange && onChange(currentPage + 1)}
          rightContent={<IoIosArrowForward {...defaultIconProps} />}
        />
      )}
    </div>
  );
};

export { Pagination };
