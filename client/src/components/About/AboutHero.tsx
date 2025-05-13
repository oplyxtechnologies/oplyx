import React from "react";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <div>
      <div className="container text-center mx-auto max-w-md md:max-w-xl lg:max-w-5xl items-center my-10 justify-center ">
        <h1 className="text-4xl md:text-4xl lg:text-6xl   font-bold  tracking-tighter">
          We are an Independent Brand, Design, and Communication Agency
        </h1>
        <p className="text-gray-500 mt-3">
          We are an insight and behaviors driven creative marketing agency. A
          Full package Digital Creative Agency Specializing in: Video
          Production, Web Design, Branding, Brand Strategy, Content Marketing
          and Aerial Cinematography.
        </p>
      </div>
      <div className="p-2 mx-auto flex max-w-7xl justify-center items-center">
        <div className=" block md:flex gap-10  ">
          <div className="block ">
            <div className="relative  ">
              <Image
                className="text-primary -top-16 -left-16 absolute"
                src="/stroke.svg"
                width={200}
                height={40}
                alt="stroke"
              />
            </div>
            <div className="">
              <Image
                className="rounded-md content-center"
                src="/14.jpg"
                width={500}
                height={100}
                alt="Images"
              />
            </div>
            <div className="hidden relative  my-4 md:flex">
              <div className="absolute right-0">
                <Image
                  className="text-primary absolute -start-20 "
                  src="/bird.svg"
                  width={100}
                  height={40}
                  alt="bird"
                />
                <Image
                  className="rounded-md content-center"
                  src="/16.jpg"
                  width={200}
                  height={100}
                  alt="Images"
                />
              </div>
            </div>
          </div>
          <div className="  max-w-lg mt-4 md:mt-56 ">
            <div className="block ">
              <div className="bg-primary relative  text-white p-10 rounded-md max-w-sm">
                <Image
                  className="absolute lg:flex hidden text-primary -end-40 -top-30 lg:-top-40 overflow-hidden opacity-15 "
                  src="/dot.svg"
                  width={150}
                  height={40}
                  alt="dot"
                />
                <p>Our Goal</p>
                <h1 className="text-2xl pt-2">
                  &quot;We believe that it takes great people to deliver a great
                  product&quot;
                </h1>
              </div>
              <div className="mt-4">
                <Image
                  className="rounded-md content-center"
                  src="/15.jpg"
                  width={500}
                  height={100}
                  alt="Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
