import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  Icon,
}: ServiceCardProps) {
  return (
    <div className="text-primary max-w-sm p-6 border border-primary  border-opacity-15 rounded-lg shadow-lg">
      <div className="flex flex-col p-4 m-auto  ">
        {/* Icon */}
        <div className="py-4 bg-white   p-3">
          <Icon size={40} className="text-primary" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold -4">{title}</h2>
        {/* Description */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
