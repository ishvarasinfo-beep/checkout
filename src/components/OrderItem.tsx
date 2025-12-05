import { Plus, Minus } from 'lucide-react';

interface OrderItemProps {
  name: string;
  subtitle?: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function OrderItem({
  name,
  subtitle,
  quantity,
  price,
  onIncrease,
  onDecrease,
}: OrderItemProps) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{name}</h3>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="font-semibold text-gray-800 min-w-[20px] text-center">
            {quantity}
          </span>
          <button
            onClick={onIncrease}
            className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
        <p className="font-semibold text-gray-800 min-w-[80px] text-right">
          Rs. {price}
        </p>
      </div>
    </div>
  );
}
