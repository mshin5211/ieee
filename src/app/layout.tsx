import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"
// import { Navbar } from "@/components/NavBar";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { MobileNav } from "@/components/ui/MobileNav";

// const inter = Inter({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | IEEE U of I',
    default: 'IEEE U of I',
  },
  description: "Student branch of the IEEE at the University of Illinois at Urbana-Champaign",
  keywords: ["IEEE", "U of I", "IEEE U of I", "ieee uiuc", "institute of electrical and electronics engineers"],
  authors: [{name: "Minseob Shin"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
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
