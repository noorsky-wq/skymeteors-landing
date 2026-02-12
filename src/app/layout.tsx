import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Autonomous Systems | Advanced Aerial Platforms",
  description: "GPS-denied navigation, LiDAR SLAM, and vision-based autonomous flight systems for demanding operational environments.",
  keywords: ["autonomous drones", "LiDAR SLAM", "computer vision", "GPS-denied navigation", "PX4", "ROS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="fixed inset-0 grid-overlay pointer-events-none opacity-30 z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
