import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnlyProviders from "./ClientOnlyProviders";

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
        <ClientOnlyProviders>
          {children}
        </ClientOnlyProviders>
      </body>
    </html>
  );
}
