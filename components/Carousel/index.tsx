"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <section className="relative mx-auto h-[400px] w-full items-center justify-center">
      <Image
        src={images[currentIndex]}
        alt="Carousel Image"
        objectFit="contain"
        fill={true}
        quality={80}
      />
    </section>
  );
}

export default ImageCarousel;
