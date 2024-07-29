import Image from "next/image";

const title = "Bienvenidos a mi Meli Challenge";

const description =
  "Hola a todos! Mi nombre es Brayan Arango, y estoy encantado de presentarles mi desarrollo para el Meli Challenge. En esta ocasión, aspiro al rol de Desarrollador Frontend y estoy emocionado de compartir con ustedes lo que he creado.";

const instruction = '"Utilice el cuadro de búsqueda de arriba para comenzar"';

const HomePage = () => (
  <div className="w-full flex flex-col justify-center items-center gap-2">
    <h1 className="font-bold text-xl md:text-2xl text-center">{title}</h1>
    <Image
      src="/images/brayayin.webp"
      alt="El Brayayin"
      className="w-[80%] md:w-full max-w-[450px] h-auto"
      width={501}
      height={498}
    />
    <p className="text-center text-md md:text-lg max-w-[700px] text-gray-light">
      {description}
    </p>
    <p className="text-center text-sm md:text-md italic font-bold">
      {instruction}
    </p>
  </div>
);

export { HomePage as default };
