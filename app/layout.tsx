import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Sirisha Ganji | Portfolio",
  description: "Personal portfolio of Sirisha Ganji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}