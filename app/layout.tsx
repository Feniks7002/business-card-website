import "./globals.css";
import RootNavbar from "./utilites/components/navbars";
import type { RootLayoutPropType } from "./utilites/definictions/type";
import { interFont, montserratAlternatesFont } from "./utilites/definictions/fonts";

export default function RootLayout({ children }: RootLayoutPropType) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${montserratAlternatesFont.variable}`}>
        <RootNavbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
