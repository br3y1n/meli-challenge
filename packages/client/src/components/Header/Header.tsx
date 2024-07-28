"use client";
import { Button, ButtonVariantEnum } from "@components/Button";
import Image from "next/image";
import { ChangeEventHandler, KeyboardEventHandler, Suspense } from "react";
import { IoIosSearch } from "react-icons/io";
import { useHeaderState } from "./state";

const WrapperHeader = () => {
  const { goHome, showItems, query, setQuery } = useHeaderState();

  return (
    <MainComponent
      goHome={goHome}
      onChangeQuery={(event) => setQuery(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          showItems();
        }
      }}
      onSearch={showItems}
      query={query}
    />
  );
};

const MainComponent = ({
  goHome,
  onChangeQuery,
  query,
  onKeyDown,
  onSearch,
}: {
  goHome?: () => void;
  onChangeQuery?: ChangeEventHandler<HTMLInputElement>;
  query?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onSearch?: () => void;
}) => (
  <header className="bg-primary h-[100px] md:h-[60px] shrink-0">
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 w-full py-2 px-5 h-full max-w-screen-lg mx-auto">
      <Button
        onClick={goHome}
        className="shrink-0 h-full max-h-[34px]"
        aria-label="go home"
      >
        <Image
          src="/images/logo.png"
          className="h-full w-auto"
          alt="Meli logo"
          width={134}
          height={34}
        />
      </Button>

      <div className="h-[40px] w-full max-w-screen-lg relative">
        <input
          className="h-full w-full rounded p-2 pr-14 text-md text-gray-dark"
          placeholder="Buscar productos, marcas y más..."
          onChange={onChangeQuery}
          value={query}
          onKeyDown={onKeyDown}
        />

        <Button
          variant={ButtonVariantEnum.DEFAULT}
          className="absolute top-0 right-0 h-full flex items-center justify-center w-[46px] before:h-[50%] before:w-[1px] before:bg-gray-extra-light before:absolute before:right-[45px]"
          onClick={onSearch}
          aria-label="Search items"
        >
          <IoIosSearch className="h-[20px] w-auto" />
        </Button>
      </div>
    </div>
  </header>
);

const Header = () => (
  <Suspense fallback={<MainComponent />}>
    <WrapperHeader />
  </Suspense>
);

export { Header };
