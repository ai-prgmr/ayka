"use client";
import { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isValid },
  // } = useForm<FormData>();
  const [response, setResponse] = useState(null);

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const response = await sendEmail(data);
  //     setResponse(response);
  //     reset();
  //   } catch (error) {
  //     setResponse(error);
  //   }
  // };
  const industryAddress = "Halka No.61, Serve No.156/1/1/1,";
  return (
    <section id="contact" className="overflow-hidden py-8 md:py-10 lg:py-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap gap-y-8">
          <div className="mx-auto w-full items-center justify-center bg-gradient-to-r from-[#90da7f] from-10% via-30% to-blue-500  to-90% text-center">
            <div
              className="wow fadeInUp mb-12 rounded-md px-8 py-11 font-medium dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {" "}
              <h1 className="m-4 text-3xl font-bold">
                Your Partner from Concept to Completion
              </h1>
              <div className="p-4">
                <span className="m-4">
                  <h2 className="mt-4 text-2xl font-bold text-black underline dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Reach out to us via Email !
                  </h2>
                </span>
                <p className="m-4 inline-block w-56 items-center rounded-md bg-white bg-opacity-30 text-base font-medium text-[#38364d]">
                  <span className="mt-4">
                    <Link
                      href="mailto:aykapharma@gmail.com"
                      className="px-1 py-4 text-base"
                    >
                      aykapharma@gmail.com
                    </Link>
                  </span>
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-bold underline">
                Visit Our Unit
              </h2>
              <p className="mt-4 text-xl text-body-color">AYKA PHARMA</p>
              <p className="text-xl text-body-color">
                Halka No.61, Serve No.156/1/1/1,
              </p>
              <p className=" text-xl text-body-color">Jamaniya Khurd, </p>
              <p className="text-xl text-body-color">Indore, Madhya Pradesh</p>
            </div>
          </div>
          {/* <div className="mx-auto w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Reach out to us!
              </h2>
              <p className="mb-12 text-base font-medium text-[#38364d]">
                Mail us at{" "}
                <Link
                  href="mailto:3.14.ai.prgmr@gmail.com?subject=Subject&body=Pre-filled Body"
                  className="font-sm rounded-sm px-1 py-4 text-base transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                >
                  3.14.ai.prgmr@gmail.com.
                </Link>
              </p>
              <p className="mb-12 text-base font-medium text-body-color">
                Our management team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-gray-700 placeholder-gray-300 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register("name", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your email id"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-gray-700 placeholder-gray-300 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-gray-700 placeholder-gray-300 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register("message", { required: true })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full justify-center px-4">
                    <button
                      disabled={!isValid}
                      className={`rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${
                        !isValid
                          ? "cursor-not-allowed opacity-50 bg-blend-darken "
                          : ""
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      {/* {response ? <AykaModal msg={response} /> : ""} */}
    </section>
  );
};

export default Contact;
