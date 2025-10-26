
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
      <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description.substring(0, 80)}...</p>
        <div className="flex justify-between items-center mt-auto">
            <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <button
                onClick={() => onSelectProduct(product)}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-black transition-colors"
            >
                View
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;