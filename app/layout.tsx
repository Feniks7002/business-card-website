import "./globals.css";
import Link from "next/link"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
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
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/about"}>AboutMe</Link></li>
              <li><Link href={"/site-projects"}>Projects</Link></li>
              <li><Link href={"/museum"}>NightMuseum</Link></li>
              <li><Link href={"/decybelomierz"}>Decybelomierz</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        {/* <footer className="w-full bg-gray-300 flex items-center justify-center p-4">
          <p>&copy; 2023 AG WOJ. All rights reserved.</p>
        </footer> */}
      </body>
    </html>
  );
}
