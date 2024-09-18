"use client";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { motion, useInView } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const container = useRef(null);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="about" className="">
      <div className=" bg-gradient-to-r from-[#90da7f]  from-10% via-30% to-blue-500 to-90%">
        <div className="border-b border-body-color/[.15] py-8 pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            whileInView="visible"
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 100 }
            }
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-wrap items-center">
              <div ref={container} className="w-full px-4">
                <SectionTitle
                  title="Crafted for Aseptic Packaging "
                  paragraph="We offer services to enhance customer satisfaction"
                  mb="44px"
                  center
                />

                <div className="mb-12 flex w-full flex-col justify-center lg:mb-0 lg:flex-row">
                  <div className="mx-[-12px] flex flex-wrap">
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView="visible"
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0, scale: 0.5, y: 100 }
                      }
                      viewport={{ amount: 0.2 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <div className="w-full px-3">
                        <List text="Product Design and Development: Assistance in product conceptualization and design." />
                        <List text="Supply Chain Management: Procurement and Efficient handling of raw materials and components." />
                        <List text="Logistics and Distribution: Management of product transportation and delivery." />
                        <List text="Quality Assurance and Testing: Rigorous quality control measures." />
                        <List text="Regulatory Compliance: Adherence to industry standards and regulations." />
                        <List text="Strategic partners for businesses of all sizes, helping achieve your goals and gain a competitive edge." />
                      </div>
                    </motion.div>
                  </div>
                  {/* <div className="w-full px-4 lg:w-1/2">
                  <section className="banner p-4">
                    <div className="flex flex-col gap-y-4 text-lg">
                      <div
                        id="toast-simple"
                        className="flex w-full flex-col  space-x-4 rounded-lg bg-gray-100  bg-opacity-20 p-2 text-center text-body-color shadow"
                        role="log"
                      >
                        <h2 className="mb-4 flex flex-col items-center justify-center gap-y-2 md:flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="blue"
                            className="mr-2 h-12 w-12"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="ps-4">
                            Accelerate Your Beverage Launch with Our Expert
                            Manufacturing
                          </div>
                        </h2>
                      </div>
                      <div
                        id="toast-simple"
                        className="flex w-full flex-col space-x-4 rounded-lg bg-gray-100 bg-opacity-20 p-2 text-center text-body-color shadow md:flex-col"
                        role="log"
                      >
                        <div className="mb-4 flex flex-col items-center justify-center gap-y-2 md:flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="red"
                            className="mr-2 h-12 w-12"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                              clipRule="evenodd"
                            />
                            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                          </svg>
                          <div>
                            Get Your Product on Shelves Faster with Our Tetra
                            Pack Solutions
                          </div>
                        </div>
                      </div>
                      <div
                        id="toast-simple"
                        className="flex w-full flex-col space-x-4 rounded-lg bg-gray-100 bg-opacity-20 p-2 text-center text-body-color  shadow"
                        role="log"
                      >
                        <div className="mb-4 flex flex-col items-center justify-center gap-y-2 md:flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="brown"
                            className="mr-2 h-12 w-12"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                              clipRule="evenodd"
                            />
                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                          </svg>

                          <div>
                            Partner with Us for Delicious and Nutritious
                            Products
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
