import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VGCIC | Victoria Garden City Islamic Community",
  description:
    "Welcome to the official website of VGCIC — a community dedicated to nurturing faith, serving humanity, and building a strong, inclusive Islamic environment for all generations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
