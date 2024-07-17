import "./globals.css";

import { New_Rocker } from "next/font/google";
import { Dosis } from "next/font/google";


import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const NewRoker = New_Rocker({ subsets: ["latin"], weight: ["400"] });
const DosisFont = Dosis({subsets:["latin"], weight:["400","500","300"]})

export const metadata = {
  title: "GH Url Shortner",
  description: "Build By GH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b36db6" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${DosisFont.className} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
