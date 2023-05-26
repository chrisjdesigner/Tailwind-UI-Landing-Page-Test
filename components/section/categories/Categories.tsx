"use client";

import { ShoppingBagIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export interface CategoriesProps {
  callouts: {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
  }[];
}

const Categories: React.FC<CategoriesProps> = ({ callouts }) => {
  /**
   * Render
   */
  return (
    <section className="relative">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div
                  key={callout.name}
                  className="group relative flex lg:flex-col gap-7 lg:gap-0"
                >
                  {/* Image */}
                  <div className="relative w-full max-lg:aspect-[4/3] max-lg:max-w-[140px] overflow-hidden rounded bg-white transition-all group-hover:opacity-75 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="max-lg:absolute max-lg:inset-0 max-lg:h-full max-lg:w-full bg-gray-50 max-lg:object-cover"
                    />
                  </div>
                  {/* Text */}
                  <div className="relative">
                    <h3 className="lg:mt-6 text-sm lg:text-base text-gray-900">
                      <a
                        href={callout.href}
                        className="uppercase font-extrabold text-lg lg:text-xl"
                      >
                        <span className="absolute inset-0 tracking-wide" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {callout.description}
                    </p>
                    <div className="text-gray-900 font-bold uppercase mt-3 flex gap-1 flex items-center tracking-wide">
                      Shop Now
                      <ArrowLongRightIcon
                        className="h-5 w-5 flex-none text-gray-900"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
