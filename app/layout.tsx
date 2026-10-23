import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Yatharth Shrirame | AI & Data Engineer", description: "Personal portfolio of Yatharth Girish Shrirame." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
