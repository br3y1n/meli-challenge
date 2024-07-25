import { IoIosSearch } from "react-icons/io";

const Header = () => (
  <header className="bg-[#ffe600] h-[100px] md:h-[60px] shrink-0 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 w-full p-2">
    <button>
      <img src="/images/logo.png" className="h-full w-auto max-h-[34px]" />
    </button>

    <div className="h-[40px] w-full max-w-[588px] relative">
      <input
        className="h-full w-full rounded p-2 pr-14 text-[16px]"
        placeholder="Buscar productos, marcas y más..."
      />

      <button className="absolute top-0 right-0 h-full flex items-center justify-center w-[46px] before:h-[50%] before:w-[1px] before:bg-[#d3d3d3] before:absolute before:right-[46px]">
        <IoIosSearch className="text-[#929292] h-[20px] w-auto" />
      </button>
    </div>
  </header>
);

export { Header };
