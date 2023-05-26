"use client";

export interface FooterProps {
  men: {
    name: string;
    href: string;
  }[];
  women: {
    name: string;
    href: string;
  }[];
  kids: {
    name: string;
    href: string;
  }[];
  about: {
    name: string;
    href: string;
  }[];
  social: {
    name: string;
    href: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ men, women, kids, about, social }) => {
  /**
   * Render
   */
  return (
    <footer className="bg-black relative" aria-labelledby="footer-heading">
      <div className="w-full flex justify-center">
        {/* Logo */}
        <div className="relative p-7 h-20 lg:h-24 w-auto bg-black -mt-4">
          <div className="absolute h-full w-7 bg-black top-0 left-0 -translate-x-full skew-y-[-30deg] origin-right"></div>
          <div className="absolute h-full w-7 bg-black top-0 right-0 translate-x-full skew-y-[30deg] origin-left"></div>
          <svg
            className="h-full w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 330.09"
          >
            <path
              d="M261.64 132.72c-5.95-8.51-11.84-16.92-18.16-25.96C322.43 71.01 400.82 35.5 479.2 0c.27.36.53.72.8 1.08-1 1.81-1.96 3.64-3.01 5.42-7.86 13.31-15.67 26.65-23.69 39.86-1.12 1.84-3 3.63-4.95 4.49-61.19 26.97-122.44 53.82-183.68 80.68-.88.4-1.8.71-3.03 1.19zm-25.05-26.05c-5.54 8.23-10.73 15.75-15.7 23.4-1.8 2.77-3.61 1.89-5.86.91-32.42-14.16-64.86-28.28-97.3-42.4C89.4 76.26 61.05 63.95 32.75 51.54c-2.04-.89-4.38-2.19-5.46-3.98C18.36 32.77 9.69 17.81.96 2.9.66 2.38.53 1.77 0 .36c79.14 35.56 157.51 70.78 236.59 106.31zm200.65-28.39c-6.81 11.59-13.55 23.22-20.49 34.73-.86 1.43-2.6 2.61-4.19 3.3-41.45 17.78-82.94 35.49-124.96 53.43l-15.04-20.91c54.94-24.02 109.33-47.81 163.72-71.59.32.35.64.7.96 1.04zm-229.58 70.59c-4.75 6.69-9.14 13.11-13.88 19.25-.59.76-3.27.53-4.65-.05-22.5-9.47-44.94-19.06-67.39-28.65-17.87-7.63-35.73-15.26-53.57-22.96-1.45-.63-3.13-1.52-3.91-2.78-7.2-11.73-14.22-23.57-22.11-36.74 55.95 24.32 110.49 48.02 165.51 71.93zm-9.43 180.66v-91.38c0-9.66-.28-19.34.07-28.99.2-5.48-1.01-10.06-4.75-14.1-3.65-3.94-4.71-7.86-.49-12.55 3.29-3.66 5.61-8.2 8.71-12.88 6.33 9.05 12.43 17.69 18.37 26.43.67.98.64 2.54.64 3.84.06 31.99.08 63.98.07 95.97 0 1.29.02 2.84-.64 3.83-6.83 10.18-13.79 20.28-20.72 30.39-.43-.19-.84-.37-1.26-.56zm82.22-.12c-6.37-9.31-12.83-18.57-19.04-27.99-1.09-1.66-1.58-4.01-1.6-6.04-.19-32.16-.26-64.32-.3-96.48 0-1.43.21-3.13.99-4.24 5.85-8.26 11.86-16.4 18.15-25.02 3.86 5.79 7.64 11.2 11.07 16.83.62 1.02.43 3.44-.37 4.29-7.02 7.52-7.69 16.46-7.59 26.25.36 36.16.08 72.32.03 108.48 0 1.26-.17 2.52-.26 3.78-.37.04-.73.09-1.08.14zm123.27-187.06c-5.04 8.74-10.43 17.29-15.02 26.26-3.31 6.47-8.08 10.26-14.77 12.86-20.38 7.94-40.57 16.39-61.21 24.8-4.99-6.8-9.86-13.44-14.94-20.37 35.38-14.99 70.18-29.74 104.98-44.49.32.32.64.63.96.94zm-326.69-.72c34.88 14.66 69.76 29.33 105.24 44.24-4.51 6.4-8.68 12.53-13.17 18.42-.65.86-3.06 1.18-4.24.71-21.91-8.74-43.77-17.62-65.62-26.55-1.16-.48-2.44-1.33-3.06-2.37-6.75-11.22-13.38-22.5-20.04-33.77.3-.22.6-.45.89-.68zm244.99 81.09c16.94-6.84 33.16-13.4 49.39-19.96.25.32.49.65.74.97-5.71 9.86-11.01 20-17.38 29.42-1.91 2.83-6.73 3.8-10.35 5.33-8.53 3.61-8.58 3.55-13.92-3.81-2.72-3.76-5.37-7.57-8.48-11.95zm-213.05-19.59c16.38 6.55 32.77 13.09 49.64 19.83-4.58 6.48-8.87 12.56-13.43 19.03-5.93-2.34-11.79-4.6-17.59-6.98-.85-.35-1.66-1.18-2.15-1.99-5.75-9.64-11.44-19.31-17.15-28.98.23-.31.46-.61.68-.91zm131.23-68.39c.6 1.14 1.63 2.25 1.72 3.43.25 3.31.12 6.65.12 9.98-.08 36.12-.15 72.24-.26 108.37-.01 2.55-.34 5.1-.52 7.65-.64.06-1.28.11-1.92.17-.27-1.8-.77-3.6-.77-5.4.02-31.63.1-63.26.15-94.88.02-9.62 0-19.23 0-28.85.5-.16.99-.31 1.48-.47z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* Component Name */}
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Navigation */}
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8 pt-7">
        <div className="xl:grid xl:gap-8">
          <div className="mt-8 lg:mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                  Men
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {men.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                  Women
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {women.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                  Kids
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {kids.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                  about
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between gap-7">
          <div>
            <h3 className="text-sm lg:text-base font-semibold leading-6 text-white uppercase font-extrabold tracking-wide">
              Subscribe to our fake newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Get exclusive offers, the latest product updates, and fitness
              inspiration delivered straight to your inbox.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Social and Subscribe */}
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 The Fake Apparel Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
