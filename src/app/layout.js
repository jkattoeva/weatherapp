import RootLayoutClient from "./layout.uc";
import "./globals.css";
import { Montserrat } from "@next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en ru">
      <body className={font.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
