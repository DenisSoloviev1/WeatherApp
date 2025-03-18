import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.scss";
import { Toaster } from "react-hot-toast";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather every day",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
  ],
  keywords: ["погода", "прогноз погоды", "weather app"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${overpass.className}`}>{children}
        <Toaster/>
      </body>
    </html>
  );
}
