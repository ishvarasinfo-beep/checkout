import { ChevronUp, ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface CheckoutSectionProps {
  number: number;
  title: string;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function CheckoutSection({
  number,
  title,
  isExpanded,
  isActive,
  onToggle,
  children,
}: CheckoutSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
              isActive
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {number}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isExpanded && (
        <div className="px-8 pb-8 pt-2">{children}</div>
      )}
    </div>
  );
}
