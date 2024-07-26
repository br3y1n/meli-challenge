"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { Pagination } from "@components/Pagination";
import { Select } from "@components/Select";
import { defaultAccessibilityProperties } from "@constants/defaultAccessibilityProperties";
import { useSearchParams } from "next/navigation";

const selectLabel = "Ordenar por";
const emptyText = "No se encontraron coincidencias...";

const ItemsPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const breadcrumbs = [
    { label: "Breadcrumb 1" },
    { label: "Breadcrumb 2" },
    { label: "Breadcrumb 3" },
  ];
  const sortOptions = [
    { label: "Value 1", value: "1" },
    { label: "Value 2", value: "2" },
    { label: "Value 3", value: "3" },
  ];

  const currentPage = 5;
  const numberPages = 10;
  const onChangePagination = () => {};
  const limitOptions = [
    { label: "4", value: 4 },
    { label: "8", value: 8 },
    { label: "12", value: 12 },
    { label: "16", value: 16 },
  ];

  console.log(search);

  const items = [
    {
      price: 1234165,
      title: "Titulo 1111 mucho mas largo",
      image: "/images/brayayin.webp",
      id: "123",
    },
    {
      price: 13213,
      title: "Titulo 2222 sdfsdf sdf sdgsdgs sd",
      image: "/images/brayayin.webp",
      id: "456",
    },
    {
      price: 16516,
      title: "Titulo 3333 sdfsdf sdf",
      image: "/images/brayayin.webp",
      id: "789",
    },
    {
      price: 1321,
      title: "Titulo 4444 sdfsdf ssdf",
      image: "/images/brayayin.webp",
      id: "101",
    },
    {
      price: 1561,
      title: "Titulo 5555 sdf sdf sdf sdfsdf",
      image: "/images/brayayin.webp",
      id: "112",
    },
    {
      price: 1321,
      title: "Titulo 6666 sdfsdf sdf sdfsdfs dfsdfsdfsdfsd",
      image: "/images/brayayin.webp",
      id: "131",
    },
  ];

  const hasItems = items.length > 0;

  return (
    <section className="p-5 flex flex-col gap-4 max-w-screen-lg mx-auto">
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        <Breadcrumb items={breadcrumbs} />
        <div className="flex gap-1 items-center shrink-0 justify-end">
          <p className="text-sm font-bold">{selectLabel}</p>
          <Select options={sortOptions} value={"1"} />
        </div>
      </div>

      <ol className="rounded bg-white flex flex-col gap-2">
        {hasItems ? (
          items.map(({ id, image, price, title }) => (
            <li
              className="min-h-[205px] flex py-6 px-4 border-b border-gray-100 gap-6 cursor-pointer sm:flex-row flex-col items-center sm:items-stretch"
              key={id}
              {...defaultAccessibilityProperties}
              onClick={() => {}}
            >
              <img src={image} className="object-contain h-[160px] w-[160px]" />

              <div className="flex flex-col gap-3 w-full">
                <h2 className="text-lg">{title}</h2>
                <p className="text-xl">$ {price.toLocaleString("es-ES")}</p>
              </div>
            </li>
          ))
        ) : (
          <p>{emptyText}</p>
        )}
      </ol>

      <div className="flex justify-center gap-2 items-center flex-wrap">
        <Pagination
          currentPage={currentPage}
          numberPages={numberPages}
          onChange={onChangePagination}
        />

        <Select options={limitOptions} value={4} />
      </div>
    </section>
  );
};

export default ItemsPage;
