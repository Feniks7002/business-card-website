import { Inter, Montserrat_Alternates } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const montserratAlternatesFont = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-headers"
});