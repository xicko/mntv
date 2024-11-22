import "../app/globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="customfont antialiased scroll-smooth">
        <NavBar />

        {children}
      </div>
    </>
  );
}
