"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Define the schema using Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  zipcode: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormType = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent! Thank you!");
        reset();
      } else {
        setSuccessMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("An error has occurred. Please try again later.");
    }
  };

  return (
    <div className=" mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            {...register("name")}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            {...register("email")}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700">Phone</span>
          <input
            {...register("phone")}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </label>

        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea
            {...register("message")}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </label>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Request a Callback
        </button>

        {successMessage && (
          <p className="text-green-500 text-sm text-center">{successMessage}</p>
        )}
      </form>
    </div>
  );
}
