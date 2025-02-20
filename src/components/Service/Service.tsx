import React from "react";
import Image from "next/image";
import {
  Globe,
  TabletSmartphone,
  LayoutPanelLeft,
  Component,
  Codesandbox,
  Blocks,
} from "lucide-react";
import ServiceCard from "@/utils/ServiceCard"; // Adjust the path as needed

const services = [
  {
    title: "Web Development",
    description: "We build fast, scalable, and modern web applications.",
    Icon: Globe,
  },
  {
    title: "App Development",
    description:
      "Creating high-performance mobile and web apps tailored to your needs.",
    Icon: TabletSmartphone,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences.",
    Icon: LayoutPanelLeft,
  },
  {
    title: "MVP Development",
    description:
      "Building scalable MVPs to validate your business idea efficiently.",
    Icon: Component,
  },
  {
    title: "ERP Development",
    description:
      "Developing enterprise-level software solutions for business efficiency.",
    Icon: Codesandbox,
  },
  {
    title: "IoT Development",
    description: "Connecting devices with intelligent IoT solutions.",
    Icon: Blocks,
  },
];

const Service: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 mb-10">
      {/* Heading */}
      <h1 className="text-center my-14 text-4xl md:text-6xl font-bold">
        Transform Your Business
        <br /> with Our Services
      </h1>

      {/* Stroke Image */}
      <div className="absolute -z-10 right-[275px] -top-1 -rotate-3 hidden md:block">
        <Image
          className="grayscale opacity-55"
          src="/stroke.png"
          alt="Stroke"
          width={300}
          height={400}
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className=" mx-auto transition-all duration-200 cursor-pointer  shadow-none scale-95 hover:scale-100"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
