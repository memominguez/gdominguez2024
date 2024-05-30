import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Web developer",
  description: "Guillermo Dominguez Portfolio",
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>      
        <main className="w-[375px] h-fit mx-auto bg-slate-950 md:w-[768px] xl:w-[1280px]">
          {children}
        </main>
      </body>
    </html>
  );
}
