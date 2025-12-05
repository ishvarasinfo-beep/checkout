import { useState } from 'react';
import OrderItem from './OrderItem';

interface CartItem {
  id: number;
  name: string;
  subtitle?: string;
  quantity: number;
  price: number;
}

export default function OrderSummary() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Spicy Ramen Bowl',
      subtitle: 'Extra Noodles',
      quantity: 1,
      price: 450,
    },
    {
      id: 2,
      name: 'Avacado Toast',
      quantity: 1,
      price: 450,
    },
  ]);

  const deliveryFee = 40;
  const gstCharges = 10;
  const itemTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalAmount = itemTotal + deliveryFee + gstCharges;

  const handleIncrease = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id: number) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

      <div className="mb-6">
        {items.map(item => (
          <OrderItem
            key={item.id}
            name={item.name}
            subtitle={item.subtitle}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Bill Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Item Total</span>
            <span>Rs. {itemTotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <span>Rs. {deliveryFee}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Gst & Other Charges</span>
            <span>Rs. {gstCharges}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">To Pay</span>
          <span className="text-xl font-bold text-gray-800">Rs. {totalAmount}</span>
        </div>
      </div>

      <button
        disabled
        className="w-full bg-gray-300 text-gray-600 py-4 rounded-full font-medium cursor-not-allowed mb-4"
      >
        Proceed To Pay
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Please review your order and address detail before proceeding
      </p>
    </div>
  );
}
