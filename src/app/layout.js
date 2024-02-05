import RootLayoutClient from "./layout.uc";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en ru">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
