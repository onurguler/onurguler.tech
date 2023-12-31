import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full bg-white p-1 text-black selection:bg-gray-50 dark:bg-stone-950 dark:text-white dark:selection:bg-gray-800`}
      >
        <Provider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
