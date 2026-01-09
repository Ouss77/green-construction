import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Construction | Sustainable Building Solutions",
  description: "Green Construction offers sustainable, eco-friendly building solutions for a better future. Discover our features, team, and contact us for your next project.",
  metadataBase: new URL("https://yourdomain.com/"),
  openGraph: {
    title: "Green Construction | Sustainable Building Solutions",
    description: "Green Construction offers sustainable, eco-friendly building solutions for a better future.",
    url: "https://yourdomain.com/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Construction - Sustainable Building Solutions",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
