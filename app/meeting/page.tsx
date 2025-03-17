"use client";

import Calendly from "./calendly";
import { PiCheckCircle } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const services = [
  {
    icon: "/images/s_6.svg",
    title: "Fire Alarm Systems",
    description:
      "State-of-the-art systems for early detection and rapid response.",
  },
  {
    icon: "/images/s_1.svg",
    title: "Fire Extinguishers",
    description:
      "High-quality extinguishers with expert maintenance and inspections.",
  },
  {
    icon: "/images/s_5.svg",
    title: "Sprinkler Systems",
    description:
      "Professional installation and regular maintenance for reliable performance.",
  },
  {
    icon: "/images/s_3.svg",
    title: "Emergency Lighting",
    description:
      "Equip your facility with lighting and signage for safe evacuations.",
  },
  {
    icon: "/images/s_4.svg",
    title: "Fire Safety Training",
    description: "Training your team to respond effectively in emergencies.",
  },
  {
    icon: "/images/s_2.svg",
    title: "Risk Assessments",
    description:
      "Comprehensive assessments to identify hazards and ensure compliance.",
  },
];

const Meeting = () => {
  return (
    <>
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/fb.png"}
            alt="Logo"
            width={10000}
            height={10000}
            className="w-[3.5em]"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-[#D32228] duration-200"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-[#D32228] duration-200"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="Guarantees"
              smooth={true}
              className="hover:text-[#D32228] duration-200"
            >
              Guarantees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#D32228]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>
      <div
        className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    "
      >
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
          <div className="md:w-2/5">
            <h1 className="text-4xl font-semibold pt-10   ">Let&apos;s Meet</h1>
            <p className="text-lg text-gray-500 py-4">
              We&apos;re always excited to connect with new people and discuss
              potential projects. Feel free to book a meeting with us—we&apos;d
              love to hear from you !
            </p>

            {[
              {
                title: "Expert Solutions + Safety Design",
                description:
                  "Transform your fire safety needs into effective solutions with our expert services.",
              },

              {
                title: "Free Safety Consultation",
                description:
                  "Receive professional advice on how to enhance your fire protection systems and ensure compliance.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Get reliable technical support for all your fire safety equipment and systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={checkItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 1.8 }}
                className="flex gap-x-4 py-4"
              >
                <PiCheckCircle className=" rounded-md text-[#D32228] text-2xl flex-shrink-0" />
                <ul>
                  <h3 className="text-lg font-bold text-gray-700">
                    {item.title}
                  </h3>
                  <div className="text-gray-400">{item.description}</div>
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="md:w-1/2">
            <Calendly />
          </div>
        </div>
      </div>
    </>
  );
};

export default Meeting;
