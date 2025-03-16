import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.scss";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather every day",
  viewport: "width=device-width, initial-scale=1.0",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${overpass.className}`}>{children}</body>
    </html>
  );
}
