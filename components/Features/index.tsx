"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <section id="features" ref={ref} className="py-4 md:py-8 lg:py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          whileInView="visible"
          animate={
            isInView
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.5, x: 100 }
          }
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="">
            <SectionTitle
              title="Why us?"
              paragraph="Outsourcing manufacturing allows existing businesses to focus on their core competencies, such as research and development or marketing."
              center
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
