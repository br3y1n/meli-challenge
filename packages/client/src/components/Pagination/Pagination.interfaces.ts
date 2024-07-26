interface IPaginationProps {
  currentPage: number;
  onChange?: (page: number) => void;
  numberPages: number;
  maxVisibleButtons?: number;
}

export type { IPaginationProps };
