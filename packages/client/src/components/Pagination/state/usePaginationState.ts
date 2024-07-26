import { IPaginationProps } from "../Pagination.interfaces";

const usePaginationState = ({
  currentPage,
  numberPages,
  maxVisibleButtons = 3,
}: IPaginationProps) => {
  const slotByButton = 1;
  const minLimitMinOffset = 1;
  const showBack = currentPage > minLimitMinOffset;
  const showNext = currentPage < numberPages;
  const hasMorePages = numberPages > maxVisibleButtons;
  const newMaxVisibleButtons = hasMorePages ? maxVisibleButtons : numberPages;
  const buttonSlotsAvailable = newMaxVisibleButtons - slotByButton;
  const slotsLeft = Math.ceil(buttonSlotsAvailable / 2);
  const minOffsetSlot = currentPage - slotsLeft;
  const maxOffsetSlot = minOffsetSlot - slotByButton + newMaxVisibleButtons;
  const exceedsMaxPages = maxOffsetSlot > numberPages;
  const maxLimitMinOffset = numberPages - newMaxVisibleButtons + slotByButton;
  const isSlotAvailable = minOffsetSlot > 0;

  const minLimitOffset = isSlotAvailable
    ? exceedsMaxPages
      ? maxLimitMinOffset
      : minOffsetSlot
    : minLimitMinOffset;

  const maxLimitOffset = minLimitOffset - slotByButton + newMaxVisibleButtons;

  const showFirstButton = minLimitOffset > minLimitMinOffset;
  const showLastButton = maxLimitOffset < numberPages;

  const buttonSlots = Array.from(
    { length: newMaxVisibleButtons },
    (_, idx) => minLimitOffset + idx
  );

  return {
    showBack,
    showFirstButton,
    minLimitMinOffset,
    buttonSlots,
    showLastButton,
    showNext,
  };
};

export { usePaginationState };
