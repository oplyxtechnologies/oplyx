"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeComponent: React.FC = () => {
  const images: string[] = [
    "/1.svg",
    "/2.svg",
    "/3.svg",
    "/4.svg",
    "/5.svg",
    "/6.svg",
    "/7.svg",
    "/8.svg",
  ];

  return (
    <Marquee
      pauseOnHover
      className="mx-auto max-w-7xl overflow-hidden p-4 py-10"
    >
      <div className="flex justify-between gap-10">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            className="opacity-50"
            width={100}
            height={40}
            alt={`logo-${index + 1}`}
          />
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;
