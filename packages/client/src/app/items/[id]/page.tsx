"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { Button, ButtonVariantEnum } from "@components/Button";
import { BuySuccessMessage } from "@components/BuySuccessMessage";
import { ErrorMessage } from "@components/ErrorMessage";
import { texts } from "@constants/texts";
import { formatNumber } from "@utils/formatNumber";
import { ItemSkeleton } from "./components";
import { useItemPageState } from "./state";

const descriptionTitle = "Descripción del producto";
const buyButtonText = "Comprar";
const buyingButtonText = "Comprando...";

const ItemPage = () => {
  const {
    hasItem,
    item,
    breadcrumbs,
    redirecting,
    goSuccess,
    isLoading,
    error,
    success,
  } = useItemPageState();

  return (
    <>
      {isLoading ? (
        <ItemSkeleton />
      ) : error ? (
        <ErrorMessage />
      ) : success ? (
        <BuySuccessMessage />
      ) : hasItem ? (
        <>
          <Breadcrumb items={breadcrumbs} />
          <div className="rounded bg-white flex gap-4 p-6 pb-10 flex-col md:flex-row">
            <div className="flex flex-col gap-2 w-full">
              <img
                src={item!.image}
                className="w-[90%] xs:w-[75%] md:w-full min-w-0 object-contain mx-auto max-h-[550px]"
                alt={item!.title}
              />
              <hr className="mt-5" />
              <p className="text-lg xs:text-xl">{descriptionTitle}</p>
              <p className="text-md xs:text-lg text-gray-light whitespace-pre-line">
                {item!.description}
              </p>
            </div>

            <div className="w-full max-w-[372px] mx-auto mt-10 md:mt-0">
              <div className="border rounded-lg border-gray-200 py-6 px-4 gap-1 flex flex-col">
                <p className="text-sm text-gray-light">{item!.condition}</p>
                <h1 className="text-lg sm:text-xl font-semibold">
                  {item!.title}
                </h1>

                <div className="w-fit shrink-0 flex gap-1">
                  <p className="text-2xl sm:text-4xl shrink-0">
                    $ {formatNumber(item!.price.amount)}
                  </p>

                  <p className="text-md sm:text-lg">
                    {item!.price.decimals.toString().padStart(2, "0")}
                  </p>
                </div>

                <p className="text-green text-md font-semibold mb-10 mt-2">
                  {item?.freeShipping && texts.free}
                </p>

                <Button
                  variant={ButtonVariantEnum.PRIMARY}
                  className="px-1 py-3 w-full font-semibold"
                  onClick={goSuccess}
                  disabled={redirecting}
                  aria-label={"Buy"}
                >
                  {redirecting ? buyingButtonText : buyButtonText}
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemPage;
