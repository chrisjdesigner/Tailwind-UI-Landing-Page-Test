"use client";

import { Fragment, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export interface MarqueeProps {}

const Marquee: React.FC<MarqueeProps> = ({}) => {
  /**
   * Render
   */
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-12 md:py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-wide text-gray-900 uppercase">
                Unleash Your Inner Athlete
              </h1>
              <p className="lg:mt-6 text-lg leading-8 text-gray-600">
                Discover High-Performance Sports Apparel.
              </p>
              <div className="mt-7 flex items-center gap-x-6">
                <a
                  href="#"
                  className="flex gap-2 items-center rounded-full bg-black px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                >
                  <ShoppingBagIcon
                    className="h-5 w-5 flex-none text-gray-200"
                    aria-hidden="true"
                  />
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/chrisj_Portrait_photograph_of_a_well_lit_woman_in_athletic_appa_dd93a504-37bc-456a-9306-fbfdf159c86d.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default Marquee;
