"use client";
import { Button, ButtonVariantEnum } from "@components/Button";
import { IoIosSearch } from "react-icons/io";
import { useHeaderState } from "./state";

const Header = () => {
  const { goHome, showItems, query, setQuery } = useHeaderState();

  return (
    <header className="bg-primary h-[100px] md:h-[60px] shrink-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 w-full py-2 px-5 h-full max-w-screen-lg mx-auto">
        <Button onClick={goHome}>
          <img src="/images/logo.png" className="h-full w-auto max-h-[34px]" />
        </Button>

        <div className="h-[40px] w-full max-w-screen-lg relative">
          <input
            className="h-full w-full rounded p-2 pr-14 text-md text-gray-dark"
            placeholder="Buscar productos, marcas y más..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                showItems();
              }
            }}
          />

          <Button
            variant={ButtonVariantEnum.DEFAULT}
            className="absolute top-0 right-0 h-full flex items-center justify-center w-[46px] before:h-[50%] before:w-[1px] before:bg-gray-extra-light before:absolute before:right-[45px]"
            onClick={showItems}
          >
            <IoIosSearch className="h-[20px] w-auto" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
