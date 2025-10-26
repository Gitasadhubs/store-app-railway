
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, description: 'High-fidelity wireless headphones with noise cancellation and a 20-hour battery life. Perfect for music lovers and travelers.', imageUrl: 'https://picsum.photos/seed/headphones/400/400' },
  { id: 2, name: 'Smartwatch Series 7', price: 399.00, description: 'The latest in wearable tech. Track your fitness, get notifications, and stay connected on the go. Water-resistant and customizable.', imageUrl: 'https://picsum.photos/seed/smartwatch/400/400' },
  { id: 3, name: 'Mechanical Keyboard', price: 120.50, description: 'A durable and responsive mechanical keyboard with customizable RGB backlighting. Ideal for gamers and programmers.', imageUrl: 'https://picsum.photos/seed/keyboard/400/400' },
  { id: 4, name: '4K Ultra HD Monitor', price: 299.99, description: 'A 27-inch 4K monitor with stunning color accuracy and clarity. Enhance your productivity and entertainment experience.', imageUrl: 'https://picsum.photos/seed/monitor/400/400' },
  { id: 5, name: 'Portable SSD 1TB', price: 150.00, description: 'Blazing-fast portable storage. Transfer large files in seconds with this compact and durable 1TB solid-state drive.', imageUrl: 'https://picsum.photos/seed/ssd/400/400' },
  { id: 6, name: 'Ergonomic Office Chair', price: 250.00, description: 'Stay comfortable and supported during long work sessions. Features adjustable lumbar support, armrests, and height.', imageUrl: 'https://picsum.photos/seed/chair/400/400' },
];

interface ProductListProps {
  onSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
        ))}
        </div>
    </div>
  );
};

export default ProductList;
