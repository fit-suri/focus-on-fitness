import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "Focus on Fitness - Premium Gym Setup, Equipment & Corporate Wellness Solutions",
  description:
    "Leading gym setup & fitness equipment provider in India. 100+ successful projects, certified trainers, corporate wellness programs. Contact us for premium fitness solutions.",
  keywords:
    "gym setup, fitness equipment, corporate wellness, personal training, gym design, fitness center management, India",
  openGraph: {
    title: "Focus on Fitness - Premium Gym Services & Equipment",
    description:
      "Transform your space with premium gym setup services. Expert fitness solutions for corporates & individuals.",
    url: "https://focusonfitness.in",
    siteName: "Focus on Fitness",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
