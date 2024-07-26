"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { Pagination } from "@components/Pagination";
import { Select } from "@components/Select";
import { defaultAccessibilityProperties } from "@constants/defaultAccessibilityProperties";
import { Controller } from "react-hook-form";
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
  { label: "Menor precio", value: "price_dsc" },
  { label: "Mayor precio", value: "price_asc" },
];

const ItemsPage = () => {
  const {
    hasItems,
    items,
    breadcrumbs,
    numberPages,
    control,
    goToItem,
    setValue,
  } = useItemsPageState();

  return (
    <section className="p-5 flex flex-col gap-4 max-w-screen-lg mx-auto">
      {hasItems ? (
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
            {items.map(({ id, image, price, title }) => (
              <li
                className="min-h-[205px] flex py-6 px-4 border-b border-gray-100 gap-6 cursor-pointer sm:flex-row flex-col items-center sm:items-stretch"
                key={id}
                {...defaultAccessibilityProperties}
                onClick={() => goToItem(id)}
              >
                <img
                  src={image}
                  className="object-contain h-[160px] w-[160px]"
                />

                <div className="flex flex-col gap-3 w-full">
                  <h2 className="text-lg">{title}</h2>
                  <p className="text-xl">$ {price.toLocaleString("es-ES")}</p>
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
    </section>
  );
};

export default ItemsPage;
