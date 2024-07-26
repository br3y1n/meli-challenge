import { Button, ButtonVariantEnum } from "@components/Button";
import { texts } from "@constants/texts";
import { useGoHome } from "@hooks/useGoHome";
import { ICustomMessage } from "./CustomMessage.interfaces";

const CustomMessage = ({ icon, text }: ICustomMessage) => {
  const { goHome } = useGoHome();

  return (
    <div className="rounded bg-white flex justify-center px-5 py-7 flex-col gap-5 items-center">
      {icon}
      <h1 className="text-xl text-center">{text}</h1>
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
