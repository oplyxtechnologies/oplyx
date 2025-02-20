import React from "react";

import {
  Globe,
  TabletSmartphone,
  LayoutPanelLeft,
  Component,
  Codesandbox,
  Blocks,
} from "lucide-react";
import ServiceCard2 from "@/utils/ServiceCard2"; // Adjust the path as needed

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

const Service2: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 mb-10">
      <div className="flex mx-auto">
        <div>Hello</div>
        {/* Services Grid */}
        <div className="flex flex-wrap  gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" mx-auto transition-all duration-200 cursor-pointer  scale-95 hover:scale-100"
            >
              <ServiceCard2
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service2;
