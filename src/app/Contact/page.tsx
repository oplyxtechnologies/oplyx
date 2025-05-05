import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex max-w-7xl mx-auto ">
        <div>
          <h1 className="">Contact us</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
