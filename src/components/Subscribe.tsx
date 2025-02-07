import React from "react";
import { Mail, Clock, Headphones } from "lucide-react";
import { Button } from "./ui/button";

const Subscribe: React.FC = () => {
  return (
    <div className="p-2">
      <div className="bg-secondary  text-primary border-2 px-6 py-10 rounded-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-10">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold">
            Let&apos;s talk about your{" "}
            <span className="text-primary">digital agency goals</span>
          </h2>

          {/* Subscription Form */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full sm:w-auto rounded-md border-2 text-black focus:outline-none"
            />
            <Button>Contact</Button>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              Call on: 0125 258 993 22
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Time: 9am to 5pm (Sunday closed)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email: example@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
