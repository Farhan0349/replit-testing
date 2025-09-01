export default function RecentUpload() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200" data-testid="card-recent-upload">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900" data-testid="heading-recent-upload">
          Recent Upload Report
        </h2>
      </div>

      {/* User Card */}
      <div className="text-center mb-6">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
            {/* 3D Character Illustration */}
            <div className="w-20 h-20 relative">
              {/* Head */}
              <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-1 relative">
                {/* Hair */}
                <div className="absolute -top-2 left-1 right-1 h-6 bg-gradient-to-br from-amber-700 to-amber-800 rounded-t-full"></div>
                {/* Glasses */}
                <div className="absolute top-3 left-1 right-1 h-4 flex items-center justify-center">
                  <div className="w-8 h-3 border-2 border-gray-700 rounded-lg bg-gray-100 bg-opacity-30"></div>
                </div>
              </div>
              {/* Body */}
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg mx-auto relative">
                {/* Laptop */}
                <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-1" data-testid="text-user-name">
            Vichody
          </h3>
          <p className="text-sm text-gray-900 mb-1" data-testid="text-full-name">
            Anderson Brooks
          </p>
          <p className="text-sm text-gray-500" data-testid="text-user-role">
            Client
          </p>
        </div>

        {/* Date and View Report */}
        <div className="space-y-3">
          <p className="text-xs text-gray-400" data-testid="text-upload-date">
            02/10/2026
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium" data-testid="link-view-report">
            View Report
          </button>
        </div>
      </div>

      {/* View All Reports Button */}
      <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center group" data-testid="button-view-all-reports">
        <span>View all Reports</span>
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}