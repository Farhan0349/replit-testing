import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: "purple" | "orange" | "blue" | "pink";
  isHighlighted?: boolean;
}

const colorVariants = {
  purple: {
    icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    highlight: "ring-2 ring-purple-300 dark:ring-purple-700"
  },
  orange: {
    icon: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
    highlight: "ring-2 ring-orange-300 dark:ring-orange-700"
  },
  blue: {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    highlight: "ring-2 ring-blue-300 dark:ring-blue-700"
  },
  pink: {
    icon: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    border: "border-pink-200 dark:border-pink-800",
    highlight: "ring-2 ring-pink-300 dark:ring-pink-700"
  }
};

export default function StatsCard({ title, value, icon: Icon, color, isHighlighted = false }: StatsCardProps) {
  const variant = colorVariants[color];
  
  return (
    <Card 
      className={cn(
        "bg-white dark:bg-gray-800 border transition-all duration-200 hover:shadow-md",
        variant.border,
        isHighlighted && variant.highlight
      )}
      data-testid={`card-stats-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              variant.icon
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white" data-testid={`text-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}