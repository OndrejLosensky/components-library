import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "UI Components Documentation",
  description: "Documentation for React UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-screen">
          <div className="w-full">
            <div className="max-w-4xl mx-auto py-16">              
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
