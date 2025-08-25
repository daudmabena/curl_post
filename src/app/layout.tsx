import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Post Man - Modern API Testing Tool",
  description: "A modern desktop application for testing API endpoints with beautiful UI and powerful features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-text-primary font-sans antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col mt-15">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
