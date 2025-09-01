import { ChevronDown } from "lucide-react";

export default function Analytics() {
  const barData = [
    { height: 40, value: 250 },
    { height: 60, value: 300 },
    { height: 35, value: 200 },
    { height: 45, value: 275 },
    { height: 25, value: 150 },
    { height: 90, value: 450 },
    { height: 75, value: 375 },
    { height: 80, value: 400 },
    { height: 30, value: 175 },
    { height: 65, value: 325 },
    { height: 50, value: 250 },
    { height: 55, value: 275 },
  ];

  const linePoints = [
    { x: 8.33, y: 70 },
    { x: 16.66, y: 65 },
    { x: 25, y: 75 },
    { x: 33.33, y: 60 },
    { x: 41.66, y: 80 },
    { x: 50, y: 45 },
    { x: 58.33, y: 55 },
    { x: 66.66, y: 50 },
    { x: 75, y: 65 },
    { x: 83.33, y: 70 },
    { x: 91.66, y: 60 },
    { x: 100, y: 75 },
  ];

  const createPathData = () => {
    return linePoints.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${path} ${command} ${point.x} ${point.y}`;
    }, '');
  };

  return (
    <div className="bg-white rounded-[12px] p-[24px] shadow-sm border border-gray-200" data-testid="card-analytics">
      {/* Header */}
      <div className="flex items-center justify-between mb-[24px]">
        <div>
          <h2 className="text-[16px] font-semibold text-gray-900 mb-[4px]" data-testid="heading-analytics">
            Analytics
          </h2>
          <p className="text-[12px] text-gray-500">Data for 2024</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50" data-testid="button-date-filter">
            <span>July 2024</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-80" data-testid="chart-container">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-4">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-12 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 25, 50, 75, 100].map((percentage) => (
              <div
                key={percentage}
                className="absolute w-full border-t border-gray-100"
                style={{ top: `${100 - percentage}%` }}
              />
            ))}
          </div>

          {/* Bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 h-full">
            {barData.map((bar, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-yellow-400 to-yellow-500 rounded-t-sm hover:from-yellow-500 hover:to-yellow-600 transition-colors duration-200"
                style={{ 
                  height: `${bar.height}%`,
                  width: 'calc(100% / 12 - 4px)',
                  marginLeft: '2px',
                  marginRight: '2px'
                }}
                data-testid={`bar-${index}`}
              />
            ))}
          </div>

          {/* Line chart overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d={createPathData()}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
            {linePoints.map((point, index) => (
              <circle
                key={index}
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="3"
                fill="#8B5CF6"
                className="drop-shadow-sm"
              />
            ))}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-400 mt-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <span key={month} className="flex-1 text-center">{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}