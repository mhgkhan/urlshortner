import "./globals.css";

import { New_Rocker, Chakra_Petch } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// export const chakra_Petch = New_Rocker({ subsets: ["latin"], weight: ["400"] });
export const chakra_Petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });
const ibm_Plex_Sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "GH UrlShortner || usgh.com",
  description: "GH Urlshortner is a powerful and user-friendly URL shortening service that transforms long links into concise, 8-character URLs. Our platform ensures fast, reliable, and secure link shortening for easy sharing and improved accessibility. Simplify your links and enhance your digital presence with GH UrlShortner today! Built with cutting-edge technologies like Next.js and styled with TailwindCSS.",
  keywords: "URL shortener, link shortener, shorten URLs, 8-character URLs, URL shortening service, fast URL shortener, secure URL shortener, URL management, link sharing, GH UrlShortner",
  author: "mhgkhan",
  url: "https://usgh.netlify.app",
  image: "https://avatars.githubusercontent.com/u/128809509?v=4",
  type: "website",
  site_name: "GH UrlShortner",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="x9YuyIlhUHD9CsateViRxBhr5jAlA7i_TmndcM15By8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="google-adsense-account" content="ca-pub-1375177597277112"></meta>
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
      <body className={`${ibm_Plex_Sans.className} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
