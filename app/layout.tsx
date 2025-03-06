import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Fire Buster – Complete Fire Safety Solutions | Protection, Prevention & Maintenance",
  description: "Developed by Hasnain Khan.",
  openGraph: {
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1333301340285304942/1347028854212005919/image.png?ex=67ca55e1&is=67c90461&hm=d47450c90ecc4ba3b5c944da8301e12b1c28c7d4787e29ee1fba61e828b04751&",
        width: 1200,
        height: 630,
        alt: "Fire Buster Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
