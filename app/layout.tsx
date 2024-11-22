import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MNTV",
  description: "Welcome to the leading Mongolian Counter-Strike site in the world, featuring news, demos, pictures, statistics, on-site coverage and much much more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='customfont antialiased'
      >
        <NavBar />

        {children}

      </body>
    </html>
  );
}
