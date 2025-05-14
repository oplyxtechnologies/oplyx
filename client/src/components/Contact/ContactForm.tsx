"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/config/config";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import ChooseService from "../Emails/ChooseService";
import Loader from "../ui/Loader";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@,]+@[^\s@,]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?\d{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid phone number.";
    if (formData.message.trim().length < 10 || !/\s/.test(formData.message)) {
      newErrors.message = "Message should be meaningful and structured.";
    }
    if (!agreed) newErrors.terms = "You must agree to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoader(true);
        await axios({
          method: "POST",
          url: "api/enquiry/create",
          data: {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            message: formData.message,
            service: selectedServices,
          },
        });
        setLoader(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedServices([]);
        Swal.fire({
          title: "Contact form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#464646",
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("An unexpected error occurred.");
        }
        setLoader(false);
        console.error(error);
      }
    }
  };

  return (
    <section className="min-h-screen px-4 py-16 md:px-10 bg-white">
      <ToastContainer />
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">
          Connecting People
        </span>
        <h1 className="text-4xl font-bold text-black mt-4">Contact us</h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          We&apos;re here to help! Share your thoughts or questions with us, and
          we&apos;ll respond promptly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
              Name
            </label>
            <Input
              placeholder="Jonnie Dawson"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="h-11"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                Email
              </label>
              <Input
                placeholder="hello@oplyx.co"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-11"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                Phone
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) => handleChange("phone", value || "")}
                className="text-sm rounded-md border border-gray-300 px-3 h-11 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
              Message
            </label>
            <Textarea
              placeholder="I'd love to learn more about your services"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(v) => {
                setAgreed(!!v);
                if (v) setErrors((prev) => ({ ...prev, terms: "" }));
              }}
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="font-semibold">Terms and Conditions</span>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
          )}
          <div>
            <ChooseService
              selected={selectedServices}
              setSelected={setSelectedServices}
            />
            <div className="mt-4 text-sm text-gray-600">
              Selected: {selectedServices.join(", ") || "None"}
            </div>
          </div>
          {loader ? (
            <Button
              type="submit"
              className="bg-[#464646] hover:bg-[#7e7e7e] text-white  w-[100px]"
              disabled
              style={{ cursor: "not-allowed" }}
            >
              <Loader />
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#464646] hover:bg-[#7e7e7e] text-white w-[100px]"
            >
              Send now
            </Button>
          )}
        </form>

        {/* Image Side */}
        <div className="w-full h-[280px] sm:h-[400px] md:h-full">
          <Image
            src="/contact-desk.jpg"
            alt="Office setup"
            width={800}
            height={800}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
