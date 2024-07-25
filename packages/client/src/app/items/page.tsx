"use client";
import { useSearchParams } from "next/navigation";

const ItemsPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  console.log(search);

  return (
    <section className="p-5 flex flex-col gap-4">
      <div className="flex justify-between">
        <div>Breadcrumb</div>
        <div>sortSelect</div>
      </div>

      <div className="rounded bg-white flex flex-col gap-2 p-2">
        <div className="max-h-[150px] h-full w-full flex">
          <img src="/images/brayayin.webp" className="object-contain" />

          <div>
            <p>prince</p>
            <p>title</p>
          </div>
        </div>

        <div className="max-h-[150px] h-full w-full flex">
          <img src="/images/brayayin.webp" className="object-contain" />

          <div>
            <p>prince</p>
            <p>title</p>
          </div>
        </div>

        <div className="max-h-[150px] h-full w-full flex">
          <img src="/images/brayayin.webp" className="object-contain" />

          <div>
            <p>prince</p>
            <p>title</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <div>Pagination</div>
        <div>offsetSelect</div>
      </div>
    </section>
  );
};

export default ItemsPage;
