import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, Icon }: ServiceCardProps) {
  return (
    <div className="text-primary max-w-sm border border-primary  border-opacity-15 rounded-lg ">
      <div className="flex p-4 m-auto items-center ">
        {/* Icon */}
        <div className=" bg-white">
          <Icon size={20} className="text-primary" />
        </div>

        <h2 className="text-md ">{title}</h2>
      </div>
    </div>
  );
}
