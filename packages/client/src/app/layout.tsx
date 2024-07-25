import { Header } from "@components/Header";
import { Main } from "@components/Main";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/proximanova-regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/proximanova-semibold.woff2",
      weight: "600",
    },
  ],
});

const metadata: Metadata = {
  title: "Meli challenge",
  description: "Create by Brayayin Arango",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={clsx(proximaNova.className, "flex flex-col")}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export { RootLayout as default, metadata };
