
import React from 'react';

interface HeaderProps {
  cartItemCount: number;
  setView: (view: 'list' | 'cart') => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, setView }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setView('list')}
        >
          <svg
            xmlns="http://www.w.org/2000/svg"
            className="h-8 w-8 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a.75.75 0 01.75.75v.25a1.5 1.5 0 003 0V2.75A.75.75 0 0115.25 2h.025a2.5 2.5 0 012.425 2.915l-1.05 4.39a1.5 1.5 0 01-1.455 1.195H4.805a1.5 1.5 0 01-1.456-1.195l-1.05-4.39A2.5 2.5 0 014.725 2h.025A.75.75 0 015.25 2.75v.25a1.5 1.5 0 003 0V2.75A.75.75 0 0110 2zM3.86 12.18a.5.5 0 01.49-.43h11.3a.5.5 0 01.49.43l.5 2.083a.5.5 0 01-.49.57H3.86a.5.5 0 01-.49-.57l.5-2.083z"
              clipRule="evenodd"
            />
            <path d="M4 12.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75zM4 15.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Simple Store</h1>
        </div>
        <nav className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base">
          <button
            onClick={() => setView('cart')}
            className="relative text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;