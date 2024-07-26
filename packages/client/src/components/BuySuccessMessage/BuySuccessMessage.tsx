import { CustomMessage } from "@components/CustomMessage";
import { FaCheckCircle } from "react-icons/fa";

const successText = "¡Compra realizada con éxito!";

const BuySuccessMessage = () => (
  <CustomMessage
    icon={<FaCheckCircle className="h-[150px] text-green w-auto" />}
    text={successText}
  />
);

export { BuySuccessMessage };
