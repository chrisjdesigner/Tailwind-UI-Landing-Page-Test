"use client";

export interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  /**
   * Render
   */
  return (
    <div className="relative bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/chrisj_fabric_texture_black_tone_high_detailed_high_quality_bac_afadd1bd-1d9f-4f55-bfed-f8c86fb7ebc0.png')] bg-repeat bg-[length:512px_512px] opacity-30"></div>
      <div className="relative mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0 flex">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover object-[50%_20%]"
              src="/Chris_full_body_photograph_of_a_well_lit_man_playing_street_bas_8208db66-7deb-4046-8eae-1167f2b415df-gigapixel-standard-scale-4_00x.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-2xl lg:text-4xl font-bold tracking-wide text-gray-100 uppercase">
              Exceptional Apparel
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-200">
              Our mission is to equip athletes, fitness enthusiasts, and active
              individuals with the gear they need to excel in their pursuits
              while looking and feeling their best.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-200 lg:max-w-none flex flex-col gap-7">
              <p>
                At The Fake Apparel Company, we believe in the power of active
                lifestyles and the impact of high-quality athletic clothing. We
                meticulously source premium materials and employ cutting-edge
                manufacturing techniques to create garments that meet the
                highest standards of functionality, comfort, and style. From
                moisture-wicking fabrics to ergonomic construction, each piece
                is designed to optimize performance and provide unparalleled
                comfort.
              </p>

              <p>
                Our diverse range of products caters to various athletic
                activities, ensuring that you have the essential pieces to
                elevate your workout wardrobe. Whether you're a dedicated
                runner, a yoga enthusiast, or a team sports player, our
                collection blends performance-driven features with contemporary
                aesthetics, allowing you to make a statement while pursuing your
                goals. Join us on this journey towards a stronger, more active
                lifestyle, and experience the transformative power of The Fake
                Apparel Company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
