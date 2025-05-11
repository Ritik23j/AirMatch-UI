import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SkyScanner Clone",
  description: "Search flights, hotels, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
