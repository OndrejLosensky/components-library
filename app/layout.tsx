import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";

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
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="fixed inset-y-0 border-r border-gray-200 bg-white/70 backdrop-blur-xl">
            <Sidebar />
          </div>
          
          {/* Main content */}
          <div className="ml-64 flex-1 px-8 py-6">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
