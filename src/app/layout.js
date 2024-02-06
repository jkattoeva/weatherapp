import RootLayoutClient from "./layout.uc";
import "./globals.css";
import { Inter } from "@next/font/google";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en ru">
      <body className={font.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
