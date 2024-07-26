"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { Button, ButtonVariantEnum } from "@components/Button";
import { useItemPageState } from "./state";

const descriptionTitle = "Descripción del producto";
const buyButtonText = "Comprar";

const ItemPage = () => {
  const { hasItem, item, breadcrumbs } = useItemPageState();

  return (
    <section className="p-5 flex flex-col gap-4 max-w-screen-lg mx-auto">
      {hasItem ? (
        <>
          <Breadcrumb items={breadcrumbs} />
          <div className="rounded bg-white flex gap-4 p-6 pb-10 flex-col md:flex-row">
            <div className="flex flex-col gap-2 w-full">
              <img
                src={item!.image}
                alt="xxxx"
                className="w-[90%] xs:w-[75%] md:w-full min-w-0 object-contain mx-auto"
              />
              <hr className="mt-5" />
              <p className="text-lg xs:text-xl">{descriptionTitle}</p>
              <p className="text-md xs:text-lg text-gray-extra-light whitespace-pre-line">
                {item!.description}
              </p>
            </div>

            <div className="w-full max-w-[372px] mx-auto">
              <div className="border rounded-lg border-gray-200 py-6 px-4 gap-1 flex flex-col">
                <p className="text-sm text-gray-light">{item!.condition}</p>
                <h1 className="text-lg sm:text-xl font-semibold">
                  {item!.title}
                </h1>
                <div className="w-fit mb-10 shrink-0 flex gap-1">
                  <p className="text-2xl sm:text-4xl shrink-0">
                    $ {item!.price.amount.toLocaleString("es-ES")}
                  </p>

                  <p className="text-md sm:text-lg">
                    {item!.price.decimals.toString().padStart(2, "0")}
                  </p>
                </div>

                <Button
                  variant={ButtonVariantEnum.PRIMARY}
                  className="px-1 py-3 w-full font-semibold"
                >
                  {buyButtonText}
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ItemPage;
