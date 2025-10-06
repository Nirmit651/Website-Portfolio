import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/cn";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const heading = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirmit.dev"),
  title: "Nirmit Bhoyar — Portfolio",
  description:
    "Computer Science & Data Science @ Rutgers University. I build fast, thoughtful web experiences that bridge data, product, and people.",
  openGraph: {
    title: "Nirmit Bhoyar — Portfolio",
    description:
      "Computer Science & Data Science @ Rutgers University. I build fast, thoughtful web experiences that bridge data, product, and people.",
    url: "https://nirmit.dev",
    siteName: "Nirmit Bhoyar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nirmitbhoyar",
    title: "Nirmit Bhoyar — Portfolio",
    description:
      "Computer Science & Data Science @ Rutgers University. I build fast, thoughtful web experiences that bridge data, product, and people.",
  },
  authors: [{ name: "Nirmit Bhoyar" }],
  icons: {
    icon: [{ rel: "icon", url: "/favicon.svg" }],
    shortcut: [{ rel: "shortcut icon", url: "/favicon.svg" }],
    apple: [{ rel: "apple-touch-icon", url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0c16" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c16" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100", inter.variable, heading.variable)}> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
