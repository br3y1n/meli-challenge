"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { ErrorMessage } from "@components/ErrorMessage";
import { Pagination } from "@components/Pagination";
import { Select, SelectPostionEnum, SelectSizeEnum } from "@components/Select";
import { defaultAccessibilityProperties } from "@constants/defaultAccessibilityProperties";
import { texts } from "@constants/texts";
import { formatNumber } from "@utils/formatNumber";
import { Suspense } from "react";
import { Controller } from "react-hook-form";
import { ItemsSkeleton } from "./components";
import { useItemsPageState } from "./state";

const selectLabel = "Ordenar por";
const emptyText = "No se encontraron coincidencias...";

const limitOptions = [
  { label: "4", value: 4 },
  { label: "8", value: 8 },
  { label: "12", value: 12 },
  { label: "16", value: 16 },
];

const sortOptions = [
  { label: "Más relevantes", value: "relevance" },
  { label: "Menor precio", value: "price_asc" },
  { label: "Mayor precio", value: "price_desc" },
];

const WrapperItemsPage = () => {
  const {
    hasItems,
    items,
    breadcrumbs,
    numberPages,
    control,
    goToItem,
    setValue,
    isLoading,
    error,
  } = useItemsPageState();

  return (
    <>
      {isLoading ? (
        <ItemsSkeleton />
      ) : error ? (
        <ErrorMessage />
      ) : hasItems ? (
        <>
          <div className="flex justify-between gap-2 flex-col sm:flex-row">
            <Breadcrumb items={breadcrumbs} />
            <div className="flex gap-1 items-center shrink-0 justify-end">
              <p className="text-sm font-bold">{selectLabel}</p>

              <Controller
                control={control}
                name="sort"
                render={({ field: { value, onChange } }) => (
                  <Select
                    options={sortOptions}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>

          <ol className="rounded bg-white flex flex-col gap-2">
            {items.map(({ id, image, price, title, freeShipping }) => (
              <li
                className="min-h-[205px] flex py-6 px-4 border-b border-gray-100 gap-6 cursor-pointer sm:flex-row flex-col items-center sm:items-stretch"
                key={id}
                {...defaultAccessibilityProperties}
                onClick={() => goToItem(id)}
              >
                <img
                  src={image}
                  className="object-contain h-[160px] w-[160px]"
                  alt={title}
                />

                <div className="flex flex-col gap-3 w-full">
                  <h2 className="text-lg">{title}</h2>
                  <p className="text-xl">$ {formatNumber(price)}</p>
                  <p className="text-green text-md font-semibold">
                    {freeShipping && texts.free}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex justify-center gap-8 items-center flex-wrap">
            <Controller
              control={control}
              name="currentPage"
              render={({ field: { value, onChange } }) => (
                <Pagination
                  currentPage={value}
                  numberPages={numberPages}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="limit"
              render={({ field: { value, onChange } }) => (
                <Select
                  options={limitOptions}
                  value={value}
                  position={SelectPostionEnum.TOP}
                  size={SelectSizeEnum.LG}
                  onChange={(newValue) => {
                    setValue("currentPage", 1);
                    onChange(newValue);
                  }}
                />
              )}
            />
          </div>
        </>
      ) : (
        <div className="rounded bg-white">
          <p className="text-lg px-4 py-16 text-center">{emptyText}</p>
        </div>
      )}
    </>
  );
};

const ItemsPage = () => (
  <Suspense fallback={<ItemsSkeleton />}>
    <WrapperItemsPage />
  </Suspense>
);

export default ItemsPage;
