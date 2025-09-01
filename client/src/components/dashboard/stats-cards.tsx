import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

const statsData = [
  {
    title: "Total Clients",
    value: "30",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-400",
  },
  {
    title: "New Clients",
    value: "10", 
    icon: UserPlus,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-300",
  },
  {
    title: "Active Clients",
    value: "10",
    icon: UserCheck,
    bgColor: "bg-cyan-50", 
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-300",
  },
  {
    title: "Inactive Clients",
    value: "13",
    icon: UserX,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600", 
    borderColor: "border-pink-300",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-[20px]">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`bg-white rounded-[12px] border-2 ${stat.borderColor} p-[20px] hover:shadow-md transition-shadow duration-200`}
          data-testid={`card-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[32px] font-bold text-gray-900 mb-[4px] leading-none" data-testid={`value-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </p>
              <p className="text-[14px] font-medium text-gray-600" data-testid={`title-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.title}
              </p>
            </div>
            <div className={`w-[40px] h-[40px] ${stat.bgColor} rounded-[8px] flex items-center justify-center mt-[2px]`}>
              <stat.icon className={`w-[20px] h-[20px] ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}