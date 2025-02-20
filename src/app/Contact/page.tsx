"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { House } from "lucide-react";
import { Phone } from "lucide-react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here (API call, email service, etc.)
  };

  return (
    <div className=" items-center justify-center mx-auto max-w-7xl rounded-xl my-10 block space-y-3">
      <Image
        className="aspect-[4/2] rounded-lg mx-auto "
        src="/contact.jpg"
        width={1000}
        height={100}
        alt="Conatct"
      />
      <div className="h-[60vh] items-center justify-center my-auto  rounded-xl ">
        <div className="flex flex-col md:flex-row p-8 rounded-lg w-full max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="md:w-1/2 p-6 justify-center items-center space-y-5  ">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-2">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu.
            </p>
            <div className="mt-4 space-y-5">
              <p className="flex items-center text-gray-700">
                <span className="mr-5">
                  <House />
                </span>{" "}
                545 Mavis Island, Chicago, IL 99191
              </p>
              <p className="flex items-center text-gray-700">
                <span className="mr-5">
                  <Phone />
                </span>{" "}
                +1 (555) 234-5678
              </p>
              <p className="flex items-center text-gray-700">
                <span className="mr-5">
                  <Send />
                </span>{" "}
                hello@example.com
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <form onSubmit={handleSubmit} className="md:w-1/2 p-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded-md w-full mt-4"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded-md w-full mt-4"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded-md w-full mt-4 h-24"
              required
            ></textarea>
            <Button size="lg"> Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
