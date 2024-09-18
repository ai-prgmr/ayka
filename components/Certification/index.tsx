"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Certification() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      className="bg-gradient-to-r from-[#90da7f] from-10%  via-30% to-blue-500 to-90% p-4 md:p-8"
      id="certs"
      aria-labelledby="certificate"
    >
      {" "}
      <h2 className="text-center text-3xl text-[#2b1faf] underline">
        Licenses
      </h2>
      <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 text-gray-900 dark:text-white xs:grid-cols-2 sm:p-8 md:grid-cols-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className=" flex flex-col items-center justify-center rounded-md bg-gray-100 bg-opacity-20 p-3 shadow  md:shadow-none">
            <dt className="text-md mb-2 text-center font-extrabold  text-[#007FFF] md:text-lg">
              ISO 9001:2015{" "}
            </dt>

            <dd className="text-center text-gray-500 dark:text-gray-400">
              {/* <Image
              src="/images/certificate/FSSAI-logo.png "
              width={200}
              height={200}
              alt="FSSAI-Logo"
            /> */}
            </dd>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 bg-opacity-20 p-3 shadow  md:shadow-none">
            <dt className="text-md mb-2 font-extrabold text-[#FF00FF] md:text-lg">
              GMP{" "}
            </dt>
            <dd className="text-gray-500 dark:text-gray-400"></dd>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 bg-opacity-20 p-3 shadow  md:shadow-none">
            <dt className="text-md mb-2 font-extrabold text-[#DC143C] md:text-lg">
              FSSAI
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              {/* <Image
              src="/images/certificate/FSSAI-logo.png"
              width={200}
              height={200}
              alt="FSSAI-Logo"
            /> */}
            </dd>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 bg-opacity-20 p-3 shadow md:shadow-none">
            <dt className="text-md mb-2 font-extrabold text-body-color md:text-lg">
              Ayush Mark
            </dt>
            <dd className="text-gray-500 dark:text-gray-400"></dd>
          </div>
        </motion.div>
      </dl>
    </div>
  );
}

export default Certification;
