import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img className="w-full" src={image} alt={title} />
      <div className="m-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p className="truncate">{`${price} 원`}</p>
      </div>
      <p className="m-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
