"use client";
import React, { useState } from "react";
import "./ServiceFilter.css";

const services = [
  {
    name: "Web Development",
    content:
      "At Oplyx Technologies, we create high-performance, secure, and scalable websites that cater to businesses of all sizes. Whether you need a corporate website, an e-commerce platform, or a custom web application, our development process ensures responsiveness, speed, and seamless functionality. Using the latest frameworks and technologies, we build solutions that provide a superior user experience while maintaining top-tier security and scalability. Our team follows an agile approach to ensure that every project is developed efficiently and meets evolving business needs. We focus on mobile-first design, SEO optimization, and cross-browser compatibility, ensuring your website delivers a consistent experience across devices. By integrating content management systems (CMS) like WordPress, Shopify, or custom-built solutions, we empower businesses with easy website management and flexibility. Beyond development, we provide ongoing maintenance and support to keep your website secure and updated. Whether it's regular updates, security enhancements, or performance optimization, our team ensures your website remains future-proof and continues to drive business growth.",
  },
  {
    name: "UI/UX Design",
    content:
      "At Oplyx Technologies, we understand that great design is more than aesthetics—it’s about functionality and experience. Our UI/UX design services focus on crafting interfaces that are visually appealing, intuitive, and aligned with user behavior. We employ a user-centered design approach, ensuring every interaction feels seamless and natural. We conduct in-depth user research, wireframing, and prototyping to create engaging digital experiences. Our designs emphasize clarity, accessibility, and responsiveness, ensuring users can interact with your website or app effortlessly across all devices. We follow modern design trends while maintaining brand consistency, making sure every element—from typography to color schemes—enhances usability. Usability testing and iterative refinement are key aspects of our process. By analyzing user feedback, we continuously improve our designs to maximize engagement and conversion rates. Whether it’s a website, mobile app, or enterprise software, our UI/UX solutions ensure an exceptional experience that keeps users coming back.",
  },
  {
    name: "App Development",
    content:
      "Our app development services focus on creating high-performance, feature-rich mobile and web applications that enhance user engagement and business efficiency. Whether you need a native iOS or Android app or a cross-platform solution, we leverage modern frameworks to ensure scalability, performance, and security. Our apps are designed to provide a seamless experience while integrating essential functionalities like payment gateways, real-time notifications, and cloud synchronization. We prioritize user experience (UX) by crafting intuitive interfaces that keep users engaged. With a research-driven approach, we ensure smooth navigation, accessibility, and responsiveness, making your app a pleasure to use. We also focus on scalability, enabling your application to evolve as your business grows. Whether you’re launching an MVP or a fully functional enterprise app, we align our development process with your goals. Security is a top priority in all our projects. We implement end-to-end encryption, secure APIs, and data protection to safeguard user information. With continuous updates, bug fixes, and post-launch support, we ensure your app remains robust and competitive in a fast-evolving digital landscape.",
  },
  {
    name: "MVP Development",
    content:
      "Launching a new product can be risky, but with our MVP development services, you can validate your idea efficiently before full-scale investment. We build cost-effective, functional prototypes that allow startups and businesses to test market demand, gather user feedback, and attract potential investors. Our goal is to help you launch fast while focusing on essential features that deliver value. Our agile development approach ensures rapid iterations and continuous improvement based on real user insights. We work closely with you to prioritize core functionalities, ensuring the MVP is scalable and adaptable for future enhancements. By leveraging modern technologies and frameworks, we develop prototypes that are lightweight, efficient, and ready for market testing. Beyond development, we support you in analyzing user feedback, refining product features, and planning for full-scale development. Whether you're a startup or an established business exploring a new idea, our MVP solutions minimize risks and accelerate time-to-market, setting you up for long-term success.",
  },
  {
    name: "ERP Development",
    content:
      "Efficient business operations require seamless integration of data and processes, and our ERP development solutions provide just that. We design custom enterprise resource planning (ERP) systems that help businesses automate workflows, streamline operations, and enhance decision-making with real-time insights. From inventory and finance to HR and customer management, our solutions are tailored to fit your organizational needs. Our ERP solutions are fully scalable and modular, meaning businesses can start with core functionalities and expand as needed. We integrate cloud-based and on-premise systems to ensure flexibility and accessibility while prioritizing security and compliance. Whether you need a standalone ERP or an integrated solution with third-party tools, our team ensures smooth implementation with minimal disruption to your operations. We also provide ongoing support, maintenance, and training, helping businesses maximize efficiency and productivity. With data analytics and automation capabilities, our ERP solutions empower companies to make informed decisions and drive sustainable growth.",
  },
  {
    name: "IoT Development",
    content:
      "The Internet of Things (IoT) is revolutionizing industries, and at Oplyx Technologies, we develop smart, connected solutions that enhance automation, efficiency, and real-time data analytics. Whether for smart homes, healthcare, logistics, or industrial automation, our IoT solutions bridge the gap between devices and data, providing businesses with actionable insights. We specialize in secure IoT architecture, cloud integration, and custom firmware development, ensuring seamless communication between devices. Our solutions leverage edge computing and AI-driven analytics, enabling businesses to optimize performance, reduce costs, and enhance operational efficiency. With IoT security as a priority, we implement strong encryption, device authentication, and secure APIs to protect data integrity. From prototyping to deployment, we handle the entire IoT lifecycle, ensuring scalability and long-term success. Whether you need custom IoT applications, real-time monitoring systems, or predictive maintenance solutions, our expertise helps businesses leverage the full potential of IoT for competitive advantage.",
  },
];

const ServiceFilter: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(services[0].name);

  return (
    <div className="service-container border-2 border-opacity-10">
      <div className="service-flex">
        <div className="service-sidebar">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setActiveService(service.name)}
              className={`service-tab my-2 ${
                activeService === service.name ? "active" : ""
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        <div className={`service-content ${activeService ? "active" : ""}`}>
          <p className="service-text">
            {services.find((s) => s.name === activeService)?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
