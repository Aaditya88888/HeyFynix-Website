"use client";

import CursorEffect from "@/components/CursorEffect/CursorEffect";
import StarsBackground from "@/components/StarsBackground/StarsBackground";
import ClientParallaxProvider from "./ParallaxProvider";

export default function ClientOnlyProviders({ children }) {
  return (
    <>
      <StarsBackground />
      <CursorEffect />
      <ClientParallaxProvider>
        {children}
      </ClientParallaxProvider>
    </>
  );
}
