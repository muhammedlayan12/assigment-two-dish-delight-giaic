import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dish Delight",
  description: "A delightful restaurant experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
