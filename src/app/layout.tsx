import { ReactNode } from "react";
// import "./globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Stoore",
    template: "%s | Stoore",
  },
};

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
