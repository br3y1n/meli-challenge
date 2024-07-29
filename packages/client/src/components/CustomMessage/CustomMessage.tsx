import { Button, ButtonVariantEnum } from "@components/Button";
import { texts } from "@constants/texts";
import { useGoHome } from "@hooks/useGoHome";
import { ICustomMessage } from "./CustomMessage.interfaces";

const CustomMessage = ({ image: icon, text, description }: ICustomMessage) => {
  const { goHome } = useGoHome();

  return (
    <div className="rounded bg-white flex justify-center px-5 py-7 flex-col gap-5 items-center">
      {icon}
      <div>
        <h1 className="text-xl text-center">{text}</h1>
        {description && (
          <p className="text-md text-center text-gray-light">{description}</p>
        )}
      </div>

      <Button
        variant={ButtonVariantEnum.PRIMARY}
        className="w-fit p-2"
        onClick={goHome}
      >
        {texts.goHome}
      </Button>
    </div>
  );
};

export { CustomMessage };
