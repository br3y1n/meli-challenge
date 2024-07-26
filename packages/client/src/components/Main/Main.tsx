import { IMainProps } from "./Main.interfaces";

const Main = ({ children }: IMainProps) => (
  <main className="w-full h-full overflow-y-auto">{children}</main>
);

export { Main };
