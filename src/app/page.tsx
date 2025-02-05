import About from "@/components/About/About";
import Hero from "../components/Hero/hero";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto -mt-10">
        <Marquee
          pauseOnHover
          className="
      "
        >
          <div className="flex justify-between gap-10 max-w-7xl">
            <Image src="/1.svg" width={100} height={40} alt="24" className="" />
            <Image src="/2.svg" width={100} height={40} alt="24" className="" />
            <Image src="/3.svg" width={100} height={40} alt="24" className="" />
            <Image src="/4.svg" width={100} height={40} alt="24" className="" />
            <Image src="/5.svg" width={100} height={40} alt="24" className="" />
            <Image src="/6.svg" width={100} height={40} alt="24" className="" />
            <Image src="/7.svg" width={100} height={40} alt="24" className="" />
            <Image src="/8.svg" width={100} height={40} alt="24" className="" />
            <Image src="/9.svg" width={100} height={40} alt="24" className="" />
          </div>
        </Marquee>
      </div>

      <About />
    </div>
  );
}
