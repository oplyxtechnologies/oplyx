import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What services does Oplyx Technologies offer?",
      answer:
        "We specialize in custom web development, UI/UX design, e-commerce solutions, branding, mobile app development, and digital consulting.",
    },
    {
      question: "How does Oplyx ensure high-quality projects?",
      answer:
        "We follow a structured development process, including research, strategy, user-centered design, and rigorous testing to deliver top-quality solutions.",
    },
    {
      question: "What industries does Oplyx work with?",
      answer:
        "Our solutions cater to startups, entrepreneurs, corporate businesses, educational institutions, nonprofits, and tech-focused enterprises.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on complexity. Typically, website development takes 6-8 weeks, branding 4-6 weeks, and mobile apps 8-12 weeks.",
    },
    {
      question: "Does Oplyx provide ongoing support and maintenance?",
      answer:
        "Yes, we offer post-launch support, updates, and maintenance to ensure your digital presence remains optimized and secure.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-40 my-16 px-6">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about Oplyx Technologies.
          </p>
        </div>

        {/* Right Section - Accordion */}
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium  p-4 rounded-md w-full transition-all duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 p-4 transition-all duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
