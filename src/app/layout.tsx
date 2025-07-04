import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "A multi-step form with validation and error handling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
