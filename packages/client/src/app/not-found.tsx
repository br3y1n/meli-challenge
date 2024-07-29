import Image from "next/image";

const errorCode = "404";
const errorMessage = "Página no encontrada";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col gap-5">
      <Image
        src="/images/search.png"
        height={498}
        width={501}
        alt="Brayayin searching"
        className="w-[70%] h-auto max-w-[250px]"
      />

      <div className="flex gap-5 items-center">
        <p className="text-3xl font-bold border-r-black border-[1px] pr-5">
          {errorCode}
        </p>
        <p className="text-md">{errorMessage}</p>
      </div>
    </div>
  );
};

export default NotFound;
