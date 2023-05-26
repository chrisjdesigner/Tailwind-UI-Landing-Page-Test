import Image from "next/image";
import Header from "../components/layout/Header/Header";
import Marquee from "../components/section/marquee/Marquee";
import Categories from "@/components/section/categories/Categories";
import Footer from "@/components/layout/Footer/Footer";
import About from "@/components/section/about/About";

export default function Home() {
  return (
    <main className="relative">
      {/* Header */}
      <Header
        products={[
          {
            name: "New Arrivals",
            description:
              "Get a better understanding where your traffic is coming from",
            href: "#",
            icon: "ChartPieIcon",
          },
          {
            name: "Featured",
            description:
              "Speak directly to your customers with our engagement tool",
            href: "#",
            icon: "CursorArrowRaysIcon",
          },
        ]}
        callsToAction={[
          {
            name: "Watch demo",
            href: "#",
            icon: "PlayCircleIcon",
          },
        ]}
      />

      <Marquee />

      <Categories
        callouts={[
          {
            name: "Shoes",
            description:
              "Explore Our High-Performance Shoes for the Ultimate Athletic Edge.",
            imageSrc:
              "/chrisj_a_close-up_shot_of_running_shoes_on_a_black_background_h_a84f4a86-edfd-4284-8120-b9e17339eca1.jpg",
            imageAlt:
              "Explore Our High-Performance Shoes for the Ultimate Athletic Edge.",
            href: "#",
          },
          {
            name: "Clothing",
            description:
              "Elevate Your Performance with Our Cutting-Edge Athletic Apparel",
            imageSrc:
              "/chrisj_a_close-up_shot_of_a_colorful_athletic_shirt_on_a_manneq_7214b0de-5d01-410f-9e1b-eb01b40c5ad5.jpg",
            imageAlt:
              "Elevate Your Performance with Our Cutting-Edge Athletic Apparel",
            href: "#",
          },
          {
            name: "Best Sellers",
            description:
              "Experience Unbeatable Style and Performance with Our Best Sellers",
            imageSrc:
              "/chrisj_a_close-up_shot_of_an_athletic_jacket_on_a_mannequin_on__79b2af3a-5644-41f2-b3dd-de87f4dd03e1.jpg",
            imageAlt:
              "Experience Unbeatable Style and Performance with Our Best Sellers",
            href: "#",
          },
        ]}
      />

      <About />

      <Footer
        men={[
          {
            name: "Shoes",
            href: "#",
          },
          {
            name: "Clothing",
            href: "#",
          },
          {
            name: "Accessories",
            href: "#",
          },
          {
            name: "Shop By Sport",
            href: "#",
          },
        ]}
        women={[
          {
            name: "Shoes",
            href: "#",
          },
          {
            name: "Clothing",
            href: "#",
          },
          {
            name: "Accessories",
            href: "#",
          },
          {
            name: "Shop By Sport",
            href: "#",
          },
        ]}
        kids={[
          {
            name: "Shoes",
            href: "#",
          },
          {
            name: "Clothing",
            href: "#",
          },
          {
            name: "Accessories",
            href: "#",
          },
          {
            name: "Shop By Sport",
            href: "#",
          },
        ]}
        about={[
          {
            name: "About",
            href: "#",
          },
          {
            name: "Careers",
            href: "#",
          },
          {
            name: "News",
            href: "#",
          },
          {
            name: "Information",
            href: "#",
          },
        ]}
        social={[
          {
            name: "Facebook",
            href: "#",
          },
        ]}
      />
    </main>
  );
}
