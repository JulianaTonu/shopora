import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - Shopora online store",
    default: "Shopora online store",
  },
  description: "Shopora online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
<html lang="en">
      <body className="font-poppins antialiased">
      <div className="flex flex-col min-h-screen"> 
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
      </div>  
      </body>
    </html>
    </ClerkProvider>
    
  );
}
