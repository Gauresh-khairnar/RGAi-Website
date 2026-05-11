import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import ChatAssistant from "@/components/ChatAssistant";
import BackgroundAurora from "@/components/BackgroundAurora";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rgaitech.netlify.app"),
  title: {
    default: "RGAi Technology | AI Automation & Premium Web Development",
    template: "%s | RGAi Technology"
  },
  description: "Transforming businesses with intelligent AI agents, custom software, WhatsApp chatbots, and ultra-premium web development. Built for modern startups and high-ticket clients.",
  keywords: ["AI Automation", "Web Development", "AI Agents", "WhatsApp Automation", "Software Agency", "RGAi Technology", "Business Intelligence", "Startup MVP"],
  authors: [{ name: "RGAi Technology" }],
  creator: "RGAi Technology",
  publisher: "RGAi Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://rgaitech.netlify.app",
  },
  openGraph: {
    title: "RGAi Technology | AI Automation & Premium Web Development",
    description: "Transforming businesses with intelligent AI agents, custom software, WhatsApp chatbots, and ultra-premium web development.",
    url: "https://rgaitech.netlify.app",
    siteName: "RGAi Technology",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to public folder later
        width: 1200,
        height: 630,
        alt: "RGAi Technology Premium AI Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RGAi Technology | AI Automation & Premium Web Development",
    description: "Transforming businesses with intelligent AI agents, custom software, WhatsApp chatbots, and ultra-premium web development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1ufbBytZiQjo-lu4xn9oPSLGbsc7WFyLQBgA8EFozQk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-transparent text-foreground">
        <BackgroundAurora />
        <CustomCursor />
        <SmoothScrolling>{children}</SmoothScrolling>
        <WhatsAppButton />
        <ChatAssistant />
      </body>
    </html>
  );
}
