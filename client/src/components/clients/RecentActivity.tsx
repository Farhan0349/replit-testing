import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, User, Upload, MessageSquare } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "David Chen",
    action: "completed questionnaire",
    time: "Today, 10:32 AM",
    icon: MessageSquare,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    id: 2,
    user: "Sophie Martin",
    action: "New report uploaded for",
    time: "Yesterday, 3:45 PM",
    icon: Upload,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    id: 3,
    user: "Harvey Specter",
    action: "completed questionnaire",
    time: "Today, 10:33 AM",
    icon: MessageSquare,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    id: 4,
    user: "Samantha",
    action: "New report uploaded for",
    time: "Yesterday, 3:45 PM",
    icon: Upload,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  }
];

export default function RecentActivity() {
  return (
    <Card className="bg-white dark:bg-gray-800" data-testid="card-recent-activity">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-activity-title">
            Recent Activity
          </h3>
          <Button 
            variant="link" 
            size="sm" 
            className="text-blue-600 dark:text-blue-400 p-0 h-auto text-sm"
            data-testid="link-view-all-activity"
          >
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3" data-testid={`activity-item-${activity.id}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white" data-testid={`text-activity-description-${activity.id}`}>
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">{activity.action}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" data-testid={`text-activity-time-${activity.id}`}>
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}