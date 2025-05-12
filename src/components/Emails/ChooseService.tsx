"use client";

import clsx from "clsx";

const services = [
  "Gen AI Solution",
  "Product Development",
  "AI & Data",
  "Design",
  "DevOps & Cloud",
  "Staff Augmentation",
  "AWS",
];

interface ChooseServiceProps {
  selected: string[];
  setSelected: (services: string[]) => void;
}

export default function ChooseService({
  selected,
  setSelected,
}: ChooseServiceProps) {
  const toggleService = (service: string) => {
    if (selected.includes(service)) {
      setSelected(selected.filter((s) => s !== service));
    } else {
      setSelected([...selected, service]);
    }
  };

  return (
    <section className="w-full py-10 text-black">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Title */}
        <div>
          <h2 className="text-2xl font-semibold">What service do you need?</h2>
          <p className="text-gray-500 text-sm mt-1">
            Select the services you&apos;re interested in.
          </p>
        </div>

        {/* Service Buttons */}
        <div className="flex flex-wrap gap-4">
          {services.map((service) => {
            const isSelected = selected.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={clsx(
                  "px-5 py-2 rounded-full text-sm font-medium border transition duration-200",
                  isSelected
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black hover:bg-black hover:text-white"
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
