import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELKHAL Abdessamad - Ingénieur Full Stack & Data Science",
  description: "Étudiant en 5ème année à l'EMSI Casablanca. Développeur Full Stack et Data Scientist spécialisé en Python, React, TensorFlow, Spring Boot. Stage PFA chez BMCE Capital.",
  keywords: "Développeur, Full Stack, Data Science, React, Python, TensorFlow, Machine Learning, Next.js",
  authors: [{ name: "ELKHAL Abdessamad" }],
  openGraph: {
    title: "ELKHAL Abdessamad - Portfolio",
    description: "Développeur Full Stack & Data Scientist - Étudiant EMSI Casablanca",
    url: "https://portfolio-pearl-eta-42.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
