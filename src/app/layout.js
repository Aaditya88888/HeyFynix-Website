import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect/CursorEffect";
import StarsBackground from "@/components/StarsBackground/StarsBackground";
import ClientParallaxProvider from "./ParallaxProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "HeyFynix - A Creative Space",
  description: "A creative digital agency portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <StarsBackground />
        <CursorEffect />
        <ClientParallaxProvider>{children}</ClientParallaxProvider>
      </body>
    </html>
  );
}
