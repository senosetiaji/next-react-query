import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "./providers";

export const metadata: Metadata = {
  title: "Next Query Learning",
  description: "Learning TypeScript and TanStack Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}