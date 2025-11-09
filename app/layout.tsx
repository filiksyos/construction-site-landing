'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>BuildRight Construction | Quality Construction Services</title>
        <meta name="description" content="Professional construction services for residential and commercial projects. Quality craftsmanship, on-time delivery." />
      </head>
      <body className={geist.className}>
        <Analytics mode="auto" />
        <main>{children}</main>
      </body>
    </html>
  );
}
