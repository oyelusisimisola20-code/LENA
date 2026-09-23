import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lenacreative.studio"),
  title: "LENA — AI Creative Studio | AI Video Creator & Filmmaker",
  description: "Futuristic AI video creation, cinematic commercial production, 3D product visuals, and generative visual storytelling for visionary brands.",
  keywords: [
    "AI video creator",
    "AI filmmaker",
    "AI creative studio",
    "AI advertising",
    "AI commercial production",
    "generative AI video",
    "Runway Gen-3",
    "Google Veo",
    "Kling AI",
    "AI UGC",
    "3D product video AI"
  ],
  authors: [{ name: "LENA" }],
  creator: "LENA AI Creative Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lenacreative.studio",
    title: "LENA — AI Creative Studio | AI Video Creator & Filmmaker",
    description: "Creating cinematic AI-powered visual experiences for brands, businesses, and creative projects.",
    siteName: "LENA AI Creative Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "LENA AI Creative Studio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LENA — AI Creative Studio",
    description: "Cinematic AI video creation, commercial ads, and visual experiences.",
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-950 text-neutral-primary min-h-screen flex flex-col antialiased selection:bg-brand-cyan selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

