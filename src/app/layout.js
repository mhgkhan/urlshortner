import "./globals.css";

import { New_Rocker } from "next/font/google";
import { Glass_Antiqua } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const NewRoker = New_Rocker({subsets:["latin"],weight:["400"]})
const GlassAntiqua = Glass_Antiqua({subsets:["latin"],weight:["400"]}) 

export const metadata = {
  title: "GH Url Shortner",
  description: "Build By GH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GlassAntiqua.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
