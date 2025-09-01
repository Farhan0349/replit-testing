import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function StatusChart() {
  // Chart data based on the design
  const chartData = [
    { month: 'Jan', active: 40, inactive: 20, pending: 35 },
    { month: 'Feb', active: 50, inactive: 15, pending: 25 },
    { month: 'Mar', active: 45, inactive: 25, pending: 20 },
    { month: 'Apr', active: 60, inactive: 20, pending: 40 },
    { month: 'May', active: 35, inactive: 30, pending: 25 },
    { month: 'Jun', active: 55, inactive: 20, pending: 30 },
    { month: 'Jul', active: 50, inactive: 25, pending: 15 }
  ];

  const maxValue = 60;

  return (
    <Card className="bg-white dark:bg-gray-800" data-testid="card-status-chart">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-chart-title">
            Client Status Distribution
          </h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-gray-600 dark:text-gray-400">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-gray-600 dark:text-gray-400">Inactive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-gray-600 dark:text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Chart */}
        <div className="h-64 relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-4">
            <span>60%</span>
            <span>40%</span>
            <span>20%</span>
            <span>0%</span>
          </div>
          
          {/* Chart area */}
          <div className="flex-1 ml-8 h-full flex items-end justify-between px-4">
            {/* Grid lines */}
            <div className="absolute inset-0 ml-8 flex flex-col justify-between">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-px bg-gray-100 dark:bg-gray-700" />
              ))}
            </div>
            
            {/* Bars */}
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 relative z-10">
                <div className="flex items-end gap-1">
                  {/* Active bar */}
                  <div 
                    className="w-4 bg-green-500 rounded-t-sm" 
                    style={{ height: `${(item.active / maxValue) * 200}px` }}
                  />
                  {/* Inactive bar */}
                  <div 
                    className="w-4 bg-red-500 rounded-t-sm" 
                    style={{ height: `${(item.inactive / maxValue) * 200}px` }}
                  />
                  {/* Pending bar */}
                  <div 
                    className="w-4 bg-blue-500 rounded-t-sm" 
                    style={{ height: `${(item.pending / maxValue) * 200}px` }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}