"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "AYKA Pharma",
  description: "Accelerate Your Beverage Launch with Our Expert Manufacturing",
  keywords:
    "Liquid ORS, tetra pack manufacturing, beverage production, contract manufacturing, juice production, energy drink production",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or any other logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with your desired delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head>
        <title>Ayka Pharma</title>
        <meta
          name="description"
          content="Accelerate Your Beverage Launch with Our Expert Contract Manufacturing"
        />
        <meta
          name="keyword"
          content="Asceptic packaging, Liquid ORS, tetra pack manufacturing, beverage production, contract manufacturing, juice production, energy drink production"
        />
        {/* Other meta tags */}
      </head>

      <body className="">
        {isLoading ? (
          <SplashScreen />
        ) : (
          <section className="w-full">
            <Providers>
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </Providers>
          </section>
        )}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
