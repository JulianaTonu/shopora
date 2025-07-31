import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: {
template :"%s - Shopora online store",
  default: "Shopora online store",
  },
  
  description: "Shopora online store",
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
