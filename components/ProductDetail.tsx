
import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  return (
    <div className="bg-white p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <button onClick={onBack} className="text-gray-600 hover:text-black flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl.replace('/400/400', '/600/600')} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-black transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;