import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krosiber",
  description: "Who are Krosiber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="Krosiber,krosiber,portfolio,website,about,nextjs,react," /> 
      </Head>
      <body className={`inter.className bg `}>
        {children}
        </body>
    </html>
  );
}
