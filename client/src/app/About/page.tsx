import React from "react";
import { AboutHero } from "@/components/About/AboutHero";

import AboutOplyx from "@/components/About/AboutOplyx";
import Testimonials from "@/components/Testimonials";
import Grow from "@/components/Grow";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <div className="overflow-hidden p-2">
      <AboutHero />
      <AboutOplyx />
      <Testimonials />
      <Grow />
      <FAQ />
    </div>
  );
};

export default page;
