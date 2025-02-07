import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Headset } from "lucide-react";

const Grow: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[url('/map.svg')] h-[70vh] flex items-center justify-center">
      <div className="text-center mt-40 max-w-3xl">
        <h1 className="text-6xl font-bold tracking-tighter">
          We&apos;re global and growing
        </h1>
        <p className="mt-4 text-gray-600">
          Mizzle customer support is available free of charge. Connection
          charges can vary when calling from outside the area, abroad, or from a
          mobile phone.
        </p>
        <div className="md:flex justify-center mt-10 gap-4 p-4 inline-block space-y-4 md:space-y-0">
          <div className="text-start border-2 p-8 rounded-lg bg-white w-96 ">
            <Image src="/logo.svg" alt="logo" width={100} height={24} />
            <h1 className="text-2xl font-semibold mt-2">United States</h1>
            <p className="flex mt-2 gap-2 text-gray-500">
              <MapPin size={35} /> 55/123 Norman Street, Banking Road, Sydney
              NSW 3500
            </p>
            <p className="mt-2 flex gap-2 text-gray-500 ">
              <Headset size={24} />
              Call: 469-537-2410 (Toll-free)
            </p>
          </div>
          <div className="text-start border-2 p-8 rounded-lg bg-white w-96 ">
            <Image src="/logo.svg" alt="logo" width={100} height={24} />
            <h1 className="text-2xl font-semibold mt-2">Australia</h1>
            <p className="flex mt-2 gap-2 text-gray-500">
              <MapPin size={35} /> 55/123 Norman Street, Banking Road, Sydney
              NSW 5000
            </p>
            <p className="mt-2 flex gap-2 text-gray-500 ">
              <Headset size={24} />
              Call: 469-537-2410 (Toll-free)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
