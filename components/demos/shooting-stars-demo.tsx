import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description:
      "1-2 weeks delivery for most projects. Call us for more information.",
  },
  {
    icon: "/icons/product.svg",
    title: "Reliable Equipment",
    description:
      "Only the best quality fire safety equipment for maximum protection.",
  },
  {
    icon: "/icons/inspect.svg",
    title: "Inspection + Maintenance ",
    description: "Refilling extinguishers and scheduled inspections.",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Solutions",
    description:
      "Customized fire safety solutions designed to meet your unique needs.",
  },
  {
    icon: "/icons/satisfy.svg",
    title: "Satisfaction Guarantee",
    description:
      "Your satisfaction is our priority; we won’t rest until you’re happy.",
  },

  {
    icon: "/icons/assure.svg",
    title: "Compliance Assurance",
    description:
      "We help you stay compliant with all local fire safety regulations.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Quality fire protection solutions that won't break the bank.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-[#ff4400] flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white flex items-center gap-2 ">
        Our Guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-white">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-white rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-14 p-2 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-white to-white border-2 border-black
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-black">
              {feature.title}
            </h3>
            <p className=" text-gray-800">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
