import type { Metadata } from "next";
import "./globals.css";
import React, { FC } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Theme from "@/components/theme";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Toaster } from "sonner";

const Clock = dynamic(() => import("@/components/clock"), { ssr: false });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
  x1: React.ReactNode;
  x2: React.ReactNode;
  x3: React.ReactNode;
  x4: React.ReactNode;
  x6: React.ReactNode;
  x7: React.ReactNode;
  x8: React.ReactNode;
  x9: React.ReactNode;
  x10: React.ReactNode;
}

const RootLayout: FC<Props> = ({
  children,
  x1,
  x2,
  x3,
  x4,
  x6,
  x7,
  x8,
  x9,
  x10,
}) => {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="h-screen bg-[#0d0d0d] dark:bg-blue-500 p-5">
            <div className="border-[2.5px] border-[#f8f9f91a] h-full grid grid-cols-12 grid-rows-12 rounded-3xl p-5 gap-5">
              <div className="row-span-4 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x1}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-4 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x2}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-4 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x3}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-4 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x4}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-5 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                <Image
                  src="/enes.jpeg"
                  alt="logo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-5 col-span-4 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x6}
              </div>

              <div className="row-span-5 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x7}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-5 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden p-2">
                {x8}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-3 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x9}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-3 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                {x10}
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-3 col-span-1 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                <Theme />
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>

              <div className="row-span-3 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
                <Clock />
                <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
              </div>
            </div>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
