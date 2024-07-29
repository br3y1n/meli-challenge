import { CustomMessage } from "@components/CustomMessage";
import Image from "next/image";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const errorText = "¡Ha ocurrido un error inesperado!";
const errorDescription = "Estamos trabajando para solucionarlo";

const ErrorMessage = () => (
  <CustomMessage
    image={
      <div className="relative">
        <MdOutlineReportGmailerrorred className="md:h-[250px] text-red-700 w-auto h-[150px]" />
        <Image
          src="/images/repair.png"
          className="h-[70%] w-auto absolute bottom-[2%] -right-[18%]"
          alt="technician Brayayin"
          width={501}
          height={498}
        />
      </div>
    }
    text={errorText}
    description={errorDescription}
  />
);

export { ErrorMessage };
