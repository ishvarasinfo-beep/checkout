export default function AccountSection() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="mb-8">
        <svg
          width="280"
          height="200"
          viewBox="0 0 280 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="140" cy="190" rx="120" ry="8" fill="#D1D5DB" />
          <rect x="150" y="80" width="60" height="70" rx="8" fill="#10B981" />
          <text x="175" y="120" fill="white" fontSize="32" fontWeight="bold">
            Y
          </text>
          <circle cx="90" cy="165" r="35" fill="#4B5563" />
          <circle cx="90" cy="165" r="28" fill="#6B7280" />
          <circle cx="90" cy="165" r="15" fill="#9CA3AF" />
          <rect x="180" y="150" width="40" height="15" rx="4" fill="#4B5563" />
          <path
            d="M180 165 L185 175 L190 165 L195 175 L200 165 L205 175 L210 165 L215 175 L220 165"
            stroke="#4B5563"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M85 120 Q90 115 95 120 L98 145 Q100 155 90 155 Q80 155 82 145 Z"
            fill="#10B981"
          />
          <circle cx="120" cy="85" r="18" fill="#FCD34D" />
          <path
            d="M115 75 Q120 70 125 75 L125 95 Q120 100 115 95 Z"
            fill="#FCD34D"
          />
          <path d="M108 82 Q112 78 116 82" stroke="#8B5A3C" strokeWidth="2" fill="none" />
          <path d="M124 82 Q128 78 132 82" stroke="#8B5A3C" strokeWidth="2" fill="none" />
          <circle cx="113" cy="85" r="2" fill="#1F2937" />
          <circle cx="127" cy="85" r="2" fill="#1F2937" />
          <path d="M116 92 Q120 95 124 92" stroke="#8B5A3C" strokeWidth="2" fill="none" />
          <path
            d="M100 95 L108 100 Q115 105 115 115 L115 140 Q115 145 110 145 L100 145 Q95 145 95 140 L95 100 Z"
            fill="#10B981"
          />
          <path
            d="M140 95 L132 100 Q125 105 125 115 L125 140 Q125 145 130 145 L140 145 Q145 145 145 140 L145 100 Z"
            fill="#10B981"
          />
          <rect x="102" y="145" width="36" height="35" rx="4" fill="#92400E" />
          <path d="M110 180 L110 190 L105 195 L105 200" stroke="#92400E" strokeWidth="5" />
          <path d="M130 180 L130 190 L135 195 L135 200" stroke="#92400E" strokeWidth="5" />
          <rect x="85" y="105" width="12" height="8" rx="2" fill="#059669" />
          <rect x="40" y="115" width="35" height="25" rx="4" fill="#1F2937" />
        </svg>
      </div>

      <p className="text-gray-600 mb-8 text-center">
        Please log in or sign up to continue.
      </p>

      <div className="flex gap-4">
        <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-50 transition-colors min-w-[120px]">
          Log In
        </button>
        <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors min-w-[120px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}
