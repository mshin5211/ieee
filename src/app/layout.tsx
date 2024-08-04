import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "@/components/NavBar";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { MobileNav } from "@/components/ui/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE U of I",
  description: "Student branch of the IEEE at the University of Illinois at Urbana-Champaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <FloatingNav />
              <MobileNav />
              {children}
              <Footer />
            </ThemeProvider>
      </body>
    </html>
  );
}
