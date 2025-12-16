import { Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect/CursorEffect";
import StarsBackground from "@/components/StarsBackground/StarsBackground";
import ClientParallaxProvider from "./ParallaxProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "HeyFynix - A Creative Space",
  description: "A creative digital agency portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Backgrounds */}
        <StarsBackground />
        <CursorEffect />

        {/* Main Content */}
        <ClientParallaxProvider>{children}</ClientParallaxProvider>
      </body>
    </html>
  );
}
