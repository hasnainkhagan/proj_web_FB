"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import { PiFigmaLogo } from "react-icons/pi";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border  p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex xl:h-[500px] w-full items-center justify-center overflow-hidden  p-10 ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.fire_alarm />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.safety />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.service />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.first_aid />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.fire_extinguisher />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref}>
            <Image
              src={"/logo/FB_logo.png"}
              alt="FB IMG"
              width={500}
              height={500}
              className="w-[8em]"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="bg-white">
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}

const Icons = {
  fire_extinguisher: () => (
    <svg
      fill="#000000"
      viewBox="0 0 14 14"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M 11.922509,1.61709 7.9850089,2.27334 C 7.7193682,2.31764 7.7500011,2.58906 7.7500011,2.6875 l -1.3671563,0 C 6.6332745,1.84628 6.0026417,1 5.1250011,1 4.2007432,1 3.5695011,1.92991 3.9009073,2.78601 2.6812433,3.09189 2.1341651,4.05662 1.7903839,4.9161 1.6750011,5.20455 1.8152979,5.5319 2.1037433,5.64728 2.3924229,5.76273 2.7196573,5.62208 2.8348995,5.33392 3.5091729,3.6482 4.2569698,3.8125 5.6875011,3.8125 l 0,0.63459 c -0.9736641,0.25458 -1.6875,1.15395 -1.6875,2.20615 l 0,5.78426 c 0,0.31066 0.2518359,0.5625 0.5625,0.5625 l 3.375,0 c 0.310664,0 0.5625,-0.25184 0.5625,-0.5625 l 0,-5.8125 c 0,-1.04838 -0.7170938,-1.92919 -1.6875,-2.17898 l 0,-0.63352 0.9375,0 c 0,0.0697 -0.039914,0.36834 0.2350078,0.41416 l 3.9375001,0.65625 c 0.171445,0.0286 0.327492,-0.10361 0.327492,-0.27743 l 0,-2.71096 c 0,-0.17382 -0.156047,-0.306 -0.327492,-0.27743 z M 5.1250011,2.6875 c -0.2067657,0 -0.375,-0.16823 -0.375,-0.375 0,-0.20677 0.1682343,-0.375 0.375,-0.375 0.2067656,0 0.375,0.16823 0.375,0.375 0,0.20677 -0.1682344,0.375 -0.375,0.375 z"></path>
      </g>
    </svg>
  ),

  fire_alarm: () => (
    <svg fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 43.473 43.473">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M39.351,12.784c-2.274,0-4.125,1.851-4.125,4.125c0,1.539,0.856,2.869,2.111,3.577c-0.688,5.591-3.69,10.464-8.021,13.648 c-0.553-0.611-1.342-1.006-2.229-1.006h-0.779C31.498,30.09,35,24.469,35,18.033c0-9.649-7.852-17.5-17.5-17.5 C7.85,0.533,0,8.384,0,18.033c0,6.436,3.502,12.057,8.689,15.096H7.912c-1.658,0-3,1.344-3,3v3.811c0,1.656,1.342,3,3,3h19.176 c1.656,0,3-1.344,3-3v-2.67c5.506-3.615,9.369-9.525,10.229-16.361c1.807-0.438,3.156-2.059,3.156-3.999 C43.476,14.634,41.625,12.784,39.351,12.784z M17.504,13.384c2.566,0,4.648,2.082,4.648,4.649c0,2.567-2.083,4.648-4.648,4.648 c-2.568,0-4.647-2.081-4.647-4.648C12.856,15.466,14.935,13.384,17.504,13.384z M39.351,15.784c0.619,0,1.125,0.505,1.125,1.125 s-0.506,1.125-1.125,1.125c-0.62,0-1.125-0.505-1.125-1.125S38.73,15.784,39.351,15.784z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  safety: () => (
    <svg
      fill="#000000"
      height="200px"
      width="200px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 229.5 229.5"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193l-92.24-25.652c-1.314-0.366-2.704-0.366-4.019,0l-92.24,25.652 c-2.879,0.8-5.008,3.233-5.419,6.193c-0.535,3.847-12.74,94.744,18.565,139.961c31.268,45.165,77.395,56.739,79.343,57.209 c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209 C227.159,126.864,214.954,35.967,214.419,32.12z M182.383,162.719c-27.12,39.174-67.744,48.986-67.744,48.986V114.75H30.918 c-4.861-36.388,0.334-73.765,0.334-73.765l83.386-23.19v96.955h83.721C195.996,132.443,191.256,149.903,182.383,162.719z"></path>{" "}
      </g>
    </svg>
  ),
  first_aid: () => (
    <svg fill="#000000" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>first-aid-kit-solid</title>{" "}
        <g id="bcb20d87-9a45-4e25-814f-6152e53bb23a" data-name="Layer 4">
          {" "}
          <path d="M32,6H23.91V4.5A2.5,2.5,0,0,0,21.41,2h-7a2.5,2.5,0,0,0-2.5,2.5V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM13.91,4.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V6h-8ZM24.64,19.9a.5.5,0,0,1-.5.5h-3.5v3.5a.5.5,0,0,1-.5.5h-3.4a.5.5,0,0,1-.5-.5V20.4h-3.5a.5.5,0,0,1-.5-.5V16.5a.5.5,0,0,1,.5-.5h3.5V12.5a.5.5,0,0,1,.5-.5h3.4a.5.5,0,0,1,.5.5V16h3.5a.5.5,0,0,1,.5.5Z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  service: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect width="24" height="24" fill="none"></rect>{" "}
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,14.59L16.5,17.84a.54.54,0,0,1-.76,0l-5-4.95A3.54,3.54,0,0,1,6.34,8.06l2.39,2.33,1.63-1.63L8,6.43a3.6,3.6,0,0,1,4,.7,3.49,3.49,0,0,1,.82,3.75l4.94,4.95A.49.49,0,0,1,17.75,16.59Z"></path>{" "}
      </g>
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
