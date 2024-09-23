import React from "react";
import Link from "next/link";
function ContactCard() {
  return (
    <section className="">
      <div className="align-center mx-auto max-w-5xl justify-center  p-4 text-center  sm:p-8">
        <h5 className="mb-2 text-3xl font-bold text-[#2b1faf]">
          Your Partner from Concept to Completion
        </h5>
        <p className="mb-5 text-base text-body-color sm:text-lg">
          We handle the entire product lifecycle - from development and sourcing
          to testing and manufacturing. Partner with us to build something great
          together.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
          <Link
            href="/contact"
            className="inline-flex max-w-64 items-center justify-center rounded-lg bg-[#2b1faf] px-4 py-2.5 text-white focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto"
          >
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Contact us
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
