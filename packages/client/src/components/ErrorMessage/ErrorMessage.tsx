import { CustomMessage } from "@components/CustomMessage";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const errorText = "¡Ha ocurrido un error inesperado!";

const ErrorMessage = () => (
  <CustomMessage
    icon={
      <MdOutlineReportGmailerrorred className="h-[150px] text-red-700 w-auto" />
    }
    text={errorText}
  />
);

export { ErrorMessage };
