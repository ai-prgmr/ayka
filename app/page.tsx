import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import { Inter } from "next/font/google";
import Certification from "@/components/Certification";
import ImageCarousel from "@/components/Carousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = [
    "/images/gallery/ayka machines-1.png",
    "/images/gallery/ayka machines-2.png",
    "/images/gallery/ayka machines-3.png",
    "/images/gallery/1000004106.jpg",
    "/images/gallery/1000004103.jpg",
    "/images/gallery/1000004102.jpg",
    "/images/gallery/1000004100.jpg",
    "/images/gallery/1000004098.jpg",
  ];
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Certification />
      <Statistics />
      <div className="mx-auto h-auto w-full items-center p-4">
        <ImageCarousel images={images} />
      </div>
      <AboutSectionOne />
      <Features />
    </>
  );
}
