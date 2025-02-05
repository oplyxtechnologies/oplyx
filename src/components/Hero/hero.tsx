"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white flex items-center justify-center bg-[url('/pb.jpg')] bg-contain  bg-center bg-no-repeat h-[90vh]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col lg:flex-row items-center lg:text-left">
        <div className="lg:w-1/2 text-center px-4 lg:text-left">
          <div className="flex items-center justify-center lg:justify-start font-bold -mb-2 text-primary">
            ⭐⭐⭐⭐ On{" "}
            <Image
              src="/Google-Logo.svg"
              width={100}
              height={24}
              alt="google logo"
              className="-mx-1 grayscale"
            />{" "}
            Review
          </div>
          <h1 className="text-primary text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Innovate. Elevate.
            <br /> Dominate.
          </h1>
          <p className="mt-4 text-gray-500 md:text-lg lg:text-xl">
            Oplyx Technologies turns ideas into reality with innovative,
            scalable, and user-centric digital solutions.
          </p>
          <div className="mt-6">
            <Button className="group">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8  lg:mt-0 flex items-center justify-center relative">
          <Image src="/hero.png" alt="mockup" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
