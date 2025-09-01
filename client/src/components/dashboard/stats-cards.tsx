import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

const statsData = [
  {
    title: "Total Clients",
    value: "30",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    title: "New Clients",
    value: "10", 
    icon: UserPlus,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    title: "Active Clients",
    value: "10",
    icon: UserCheck,
    bgColor: "bg-cyan-50", 
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    title: "Inactive Clients",
    value: "13",
    icon: UserX,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600", 
    borderColor: "border-pink-200",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl border-2 ${stat.borderColor} p-6 hover:shadow-md transition-shadow duration-200`}
          data-testid={`card-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1" data-testid={`value-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-600" data-testid={`title-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.title}
              </p>
            </div>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}