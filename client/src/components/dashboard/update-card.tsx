export default function UpdateCard() {
  return (
    <div className="relative w-72 h-40 rounded-xl overflow-hidden shadow-sm" data-testid="card-update">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1" data-testid="text-update-title">
            New Updates
          </h3>
          <p className="text-white text-sm opacity-90 mb-4" data-testid="text-update-description">
            Review Latest Updates
          </p>
        </div>

        {/* View All Button */}
        <button className="flex items-center text-white text-sm font-medium group" data-testid="button-view-all-updates">
          <span>View all</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}