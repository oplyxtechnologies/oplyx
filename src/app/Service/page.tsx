import React from "react";
import ServiceHero from "@/components/Service/ServiceHero";
import ServiceFilter from "@/utils/ServiceFilter";

import FAQ from "@/components/FAQ";

import Grow from "@/components/Grow";
import Testimonials from "@/components/TestimonialsComp";

const page = () => {
  return (
    <div className="overflow-hidden p-2">
      <ServiceHero />
      <div className=" ">
        <h1 className="text-center font-bold tracking-tighter text-5xl">
          What we Offer
          <p className="text-lg font-normal tracking-normal">to the business</p>
        </h1>
        <ServiceFilter />
      </div>

      <FAQ />

      <Grow />
      <Testimonials />
    </div>
  );
};

export default page;
