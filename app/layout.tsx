import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ForumModal from "@/components/ForumModal";
import { ForumModalProvider } from "@/components/ForumModalContext";

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
      <body className='customfont antialiased scroll-smooth'>
        <NavBar />

        <ForumModalProvider>
          <ForumModal />
          {children}
        </ForumModalProvider>

        
      </body>
    </html>
  );
}
