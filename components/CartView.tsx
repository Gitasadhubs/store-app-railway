
import React from 'react';
import { CartItem } from '../types';

interface CartViewProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onAddToCart: (product: any) => void;
}

const CartView: React.FC<CartViewProps> = ({ cartItems, onRemoveFromCart, onAddToCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 md:p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-md" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.product.name}</h3>
                    <p className="text-gray-500">${item.product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button onClick={() => onRemoveFromCart(item.product.id)} className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">-</button>
                    <span className="font-medium text-lg w-8 text-center">{item.quantity}</span>
                    <button onClick={() => onAddToCart(item.product)} className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">+</button>
                </div>
                <p className="font-semibold text-lg">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end items-center">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-extrabold text-gray-900 ml-4">${totalPrice.toFixed(2)}</span>
          </div>
           <div className="mt-6 text-right">
                <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-black transition-colors">
                    Proceed to Checkout
                </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default CartView;