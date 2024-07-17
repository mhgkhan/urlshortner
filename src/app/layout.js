import "./globals.css";

import { New_Rocker } from "next/font/google";
import { Glass_Antiqua } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const NewRoker = New_Rocker({ subsets: ["latin"], weight: ["400"] });
const GlassAntiqua = Glass_Antiqua({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "GH UrlShortner",
  description: "GH UrlShortner is a powerful and user-friendly URL shortening service that transforms long links into concise, 8-character URLs. Our platform ensures fast, reliable, and secure link shortening for easy sharing and improved accessibility. Simplify your links and enhance your digital presence with GH UrlShortner today! Built with cutting-edge technologies like Next.js and styled with TailwindCSS.",,
  keywords: "URL shortener, link shortener, shorten URLs, 8-character URLs, URL shortening service, fast URL shortener, secure URL shortener, URL management, link sharing, GH UrlShortner",
  author: "mhgkhan"
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
      <body className={`${GlassAntiqua.className} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
