"use client";
import { useParams } from "next/navigation";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  return (
    <section className="p-5 flex flex-col gap-4">
      <div className="flex gap-2">
        <div>backButton</div>
        <div>Breadcrumb</div>
      </div>

      <div className="min-h-[400px] rounded bg-white p-2 flex gap-4">
        <div className="basis-2/3 flex flex-col gap-2">
          <img
            src="/images/brayayin.webp"
            alt="xxxx"
            className="w-full  min-w-0 object-contain"
          />

          <div>description title</div>
          <div>description</div>
        </div>

        <div className="basis-1/3">
          <div className="border rounded border-slate-700 p-2">
            <div>condition</div>
            <p>title</p>
            <p>price</p>

            <button className="bg-blue-500 rounded text-white p-1 w-full">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
