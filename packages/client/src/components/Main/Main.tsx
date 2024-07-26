import { IMainProps } from "./Main.interfaces";

const Main = ({ children }: IMainProps) => (
  <main className="w-full h-full overflow-y-auto">
    <section className="p-5 flex flex-col gap-4 max-w-screen-lg mx-auto">
      {children}
    </section>
  </main>
);

export { Main };
