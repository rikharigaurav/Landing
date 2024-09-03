import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundBeams/>
        <div className='flex min-h-200 p-4 font-extrabold font m-2 text-4xl justify-center items-center align-middle bg-slate-300 text-black rounded-xl'>
          WORKSPACE
        </div>
          {children}
        </body>
    </html>
  );
}
