"use client";
import { useRef } from "react";
import imageData from "./imageData";
import ImageCarousel from "../Carousel";
import { motion, useInView } from "framer-motion";

const AboutSectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="py-8 md:py-10 lg:py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <ImageCarousel images={imageData} />
            </div>
          </div>

          <div className="flex w-full justify-center px-4 lg:w-1/2 ">
            <div className="max-w-[470px]">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, x: 0 }
                    : { opacity: 0, scale: 0.5, x: 100 }
                }
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="mb-9">
                  <div className="mb-1">
                    <h3 className="mb-4 text-xl font-bold text-[#2b1faf] underline dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Liquid ORS (WHO), Electrolyte Liquid
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-[#38364d] sm:text-lg sm:leading-relaxed">
                      Formulation Expertise: Experience in electrolyte solutions
                      can assist in product development and fine-tuning.
                    </p>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="mb-1">
                    <h3 className="mb-4 text-xl font-bold text-[#2b1faf] underline dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Classic Juices
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-[#38364d] sm:text-lg sm:leading-relaxed">
                      Fruit Juices, Vegetable Juices, Blends and Combinations,
                      Specialty Juices
                    </p>
                  </div>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-[#2b1faf] underline dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Ayurvedic Solutions
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-[#38364d] sm:text-lg sm:leading-relaxed">
                    A vital part of Ayurvedic treatment, these formulations are
                    prepared by incorporating various herbs, minerals, and other
                    natural ingredients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
