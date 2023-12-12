import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const { data: products } = useCart({});
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && (
        <p className="w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
