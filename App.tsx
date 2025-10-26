
import React, { useState, useCallback } from 'react';
import { Product, CartItem } from './types';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartView from './components/CartView';

type View = 'list' | 'detail' | 'cart';

const App: React.FC = () => {
  const [view, setView] = useState<View>('list');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  }, []);
  
  const handleRemoveFromCart = useCallback((productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === productId);
      if (existingItem && existingItem.quantity > 1) {
          return prevCart.map(item =>
              item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
      }
      return prevCart.filter(item => item.product.id !== productId);
    });
  }, []);

  const renderView = () => {
    switch (view) {
      case 'detail':
        return selectedProduct && <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} onBack={() => setView('list')} />;
      case 'cart':
        return <CartView cartItems={cart} onRemoveFromCart={handleRemoveFromCart} onAddToCart={handleAddToCart} />;
      case 'list':
      default:
        return <ProductList onSelectProduct={handleSelectProduct} />;
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header cartItemCount={cartItemCount} setView={setView} />
      <main className="container mx-auto p-4 md:p-8">
        {renderView()}
      </main>
      <footer className="py-6 mt-12">
          <div className="container mx-auto text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Simple Store. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;