import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Madar Studio",
  description:
    "Madar Studio is a creative studio that specializes in branding, design, and development.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Madar Studio",
    description:
      "Madar Studio is a creative studio that specializes in branding, design, and development.",
    url: "https://madar-studio.com",
    siteName: "Madar Studio",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`antialiased`}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            {children}
          </LanguageProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
