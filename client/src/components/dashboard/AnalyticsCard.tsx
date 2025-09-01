import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AnalyticsCard() {
  // Mock data for the chart
  const chartData = [
    { day: 'Mon', value: 25 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 35 },
    { day: 'Thu', value: 40 },
    { day: 'Fri', value: 20 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 50 },
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 60 },
    { day: 'Thu', value: 25 },
    { day: 'Fri', value: 45 }
  ];

  const lineData = [30, 35, 25, 40, 45, 35, 50, 40, 35, 45, 30, 40];

  return (
    <Card className="bg-white dark:bg-gray-800" data-testid="card-analytics">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-analytics-title">
              Analytics
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1" data-testid="text-analytics-subtitle">
              Gen Vs Sen
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" data-testid="button-analytics-filter">
                July 2022
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem data-testid="menu-july-2022">July 2022</DropdownMenuItem>
              <DropdownMenuItem data-testid="menu-august-2022">August 2022</DropdownMenuItem>
              <DropdownMenuItem data-testid="menu-september-2022">September 2022</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Y-axis labels */}
        <div className="flex items-end h-64 relative">
          {/* Y-axis */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-4">
            <span>100%</span>
            <span>80%</span>
            <span>60%</span>
            <span>40%</span>
            <span>20%</span>
            <span>0%</span>
          </div>
          
          {/* Chart area */}
          <div className="flex-1 ml-8 h-full relative flex items-end justify-between px-2">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-px bg-gray-100 dark:bg-gray-700" />
              ))}
            </div>
            
            {/* Bar chart */}
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-6 lg:w-8 bg-gradient-to-t from-orange-400 to-orange-500 rounded-t-sm" style={{ height: `${item.value * 2}px` }} />
              </div>
            ))}
            
            {/* Line overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
              <polyline
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                points={lineData.map((value, index) => 
                  `${(index * 100) / (lineData.length - 1)}%,${100 - value}%`
                ).join(' ')}
              />
              {lineData.map((value, index) => (
                <circle
                  key={index}
                  cx={`${(index * 100) / (lineData.length - 1)}%`}
                  cy={`${100 - value}%`}
                  r="3"
                  fill="#8b5cf6"
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}