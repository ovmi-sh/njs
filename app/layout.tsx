import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import TRPCProvider from "@/trpc/TRPCProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const fontSans = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title:
    "njs - NextJS Starter with trpc, drizzle-org, clerk, tailwind and shadcn-ui",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkProvider>
            <TRPCProvider>{children}</TRPCProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
