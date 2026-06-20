import "./globals.css";
import Link from "next/link"
import { Inter, Montserrat_Alternates } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-headers"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${montserratAlternates.variable}`}>

        <header className="w-full bg-gray-300">
          <nav className="flex justify-between px-8 py-6">
            <div className="flex items-center gap-3">
              <img 
                src={"/kot3.png"}
                alt="main logo img" 
                className="w-[70px] h-auto hidden md:block"
              />
              <h1>AG WOJ</h1>
            </div>
            <ul className="flex items-center gap-3">
              <li className="text-sm uppercase"><Link href={"/"}>Home</Link></li>
              <li className="text-sm uppercase"><Link href={"/about"}>AboutMe</Link></li>
              <li className="text-sm uppercase"><Link href={"/site-projects"}>Projects</Link></li>
              <li className="text-sm uppercase"><Link href={"/museum"}>NightMuseum</Link></li>
              <li className="text-sm uppercase"><Link href={"/decybelomierz"}>Decybelomierz</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        {/* <footer className="w-full mh-50 bg-gray-300 flex items-center justify-center p-4">
          <p>&copy; 2023 AG WOJ. All rights reserved.</p>
        </footer> */}
      </body>
    </html>
  );
}
