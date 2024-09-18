"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="bg-gradient-to-r from-[#90da7f] from-10% via-30% to-blue-500  to-90% py-8 md:py-10 lg:py-14"
      id="stats"
      aria-labelledby="statistics"
    >
      {" "}
      <h2 className="text-center text-3xl text-[#2b1faf] underline">
        Production Capacity
      </h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <dl className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 p-4  dark:text-white sm:grid-cols-3 sm:p-8 xl:grid-cols-3">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center rounded-md bg-slate-100 bg-opacity-20 p-4 shadow">
              <dt className="mb-2 text-center text-3xl font-extrabold text-body-color">
                3{" "}
              </dt>
              <dd className="text-center font-semibold text-gray-700 dark:text-gray-700">
                Aseptic Carton Filling Machines{" "}
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
            <div className="flex flex-col items-center justify-center rounded-md bg-gray-200 bg-opacity-20 p-4 shadow">
              <dt className="mb-2 text-3xl font-extrabold text-body-color">
                1.5 Cr{" "}
              </dt>
              <dd className="font-semibold text-gray-700 dark:text-gray-700">
                pouches per month
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
            <div className="flex flex-col items-center justify-center rounded-md bg-gray-200 bg-opacity-20 p-4 shadow">
              <dt className="mb-2 text-3xl font-extrabold text-body-color">
                35000
              </dt>
              <dd className="font-semibold text-gray-700 dark:text-gray-700">
                Pouches per hour
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
            <div className="flex flex-col items-center justify-center rounded-md bg-gray-200 bg-opacity-20 p-4 shadow">
              <dt className="body-color mb-2 text-3xl font-extrabold text-body-color">
                200ml
              </dt>
              <dd className="font-semibold text-gray-700 dark:text-gray-700">
                Packaging
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
            <div className="flex flex-col items-center justify-center rounded-md bg-gray-200 bg-opacity-20 p-4 shadow">
              <dt className="mb-2 text-3xl font-extrabold text-body-color">
                In-house
              </dt>
              <dd className="font-semibold text-gray-700 dark:text-gray-700">
                Lab Testing
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
            <div className="flex flex-col items-center justify-center rounded-md bg-gray-200 bg-opacity-20 p-4 shadow">
              <dt className="mb-2 text-3xl font-extrabold text-body-color">
                In-house
              </dt>
              <dd className="text-center font-semibold text-gray-700 dark:text-gray-700">
                Quality control and Assurance
              </dd>
            </div>
          </motion.div>
        </dl>
      </motion.div>
    </div>
  );
}

export default Statistics;
