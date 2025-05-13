import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div>
      <section className="bg-white mt-10">
        <div className="block lg:flex tems-center gap-5 justify-center max-w-screen-xl px-4 py-8 mx-auto ">
          <div className="lg:w-1/2">
            <div className="block lg:flex  gap-4 ">
              <div className="h-full bg-secondary text-primary lg:w-1/2 text-center">
                <div className="h-auto w-auto  ">
                  <Image
                    src="/working2.jpg"
                    className="h-auto min-w-full rounded-md"
                    width={400}
                    height={400}
                    alt="working image"
                  />
                </div>
              </div>
              <div className="block gap-2 justify-center">
                <div className="block lg:flex gap-2">
                  <div className="h-full bg-secondary text-center p-5 rounded-md text-primary my-2 lg:my-0 w-full">
                    <p className="text-4xl font-extrabold">2+</p>

                    <span className=" ">Years of Experience</span>
                  </div>

                  <div className="h-full bg-primary text-center p-5 rounded-md text-secondary  w-full">
                    <p className="text-4xl font-extrabold">70+</p>

                    <span className=" ">
                      Happy
                      <br /> Customers
                    </span>
                  </div>
                </div>
                <div className="py-10 lg:py-3">
                  {" "}
                  <Image
                    src="/working.jpg"
                    className="h-auto min-w-full rounded-md"
                    width={400}
                    height={400}
                    alt="working image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex px-4">
            <div className="mr-auto content-center ">
              <h3 className="max-w-2xl mb-4 text-primary text-4xl font-bold tracking-tight leading-none lg:text-5xl">
                World-Class Quality with Expert Team
              </h3>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg">
                We combine creativity, technology, and strategy to empower
                brands and businesses with next-generation digital solutions.
                Our approach focuses on:
              </p>
              <ul className="inline-block pb-5 text-gray-500 list-disc p-2 gap-10">
                <li className="">
                  <span className="font-bold">Custom-Built Solutions:</span>
                  Tailored digital experiences designed to align with your
                  business objectives.
                </li>
                <li>
                  <span className="font-bold"> User-Centric Design: </span>{" "}
                  Seamless and intuitive interfaces that enhance user
                  engagement.
                </li>
                <li>
                  <span className="font-bold"> Scalable Technology:</span>{" "}
                  Future-proof solutions built on modern frameworks.
                </li>
                <li>
                  <span className="font-bold">Results-Driven Strategy:</span>{" "}
                  Data-backed insights to optimize performance and conversions
                </li>
              </ul>

              <Button className="group">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2"
                >
                  {" "}
                  Contact Us{" "}
                  <ChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
