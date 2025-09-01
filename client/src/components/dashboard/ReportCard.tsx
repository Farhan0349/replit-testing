import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ReportCard() {
  return (
    <Card className="bg-white dark:bg-gray-800" data-testid="card-report">
      <CardHeader className="pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white" data-testid="text-report-title">
          Recent Upload Report
        </h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User Profile Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600" />
            </div>
          </div>
          
          {/* User Info */}
          <div className="space-y-1">
            <p className="font-medium text-gray-900 dark:text-white" data-testid="text-report-user-name">
              Vishesh
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-report-user-detail">
              Anderson Brooks
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400" data-testid="text-report-user-type">
              Client
            </p>
          </div>
          
          {/* Date */}
          <p className="text-xs text-gray-400 dark:text-gray-500" data-testid="text-report-date">
            05/10/2026
          </p>
          
          {/* View Report Link */}
          <Button 
            variant="link" 
            size="sm" 
            className="text-blue-600 dark:text-blue-400 p-0 h-auto"
            data-testid="link-view-report"
          >
            View Report
          </Button>
        </div>
        
        {/* View All Reports Button */}
        <div className="pt-4">
          <Button 
            className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg"
            data-testid="button-view-all-reports"
          >
            View all Reports
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}