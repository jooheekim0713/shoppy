import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;
export default function Success() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>loading</p>;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        결제를 완료했습니다
      </p>
      <ul className="border-b border-gray-300 mb-8 p-4 px-8">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between my-2 items-center"
            >
              <img
                className="w-24 md:w-48 rounded-lg"
                src={product.image}
                alt={product.title}
              />
              <div className="flex-1 flex justify-between ml-4">
                <div className="basis-3/5">
                  <p className="text-lg">{product.title}</p>
                  <p className="text-xl font-bold text-brand">
                    {product.option}
                  </p>
                  <p>{product.price}원</p>
                </div>
                <div className="text-xl flex items-center">
                  <span>{product.quantity}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className="flex justify-between items-center px-2 mb-6 md:px-8 lg:px-16">
        <PriceCard text="상품 총액" price={totalPrice} />
        <BsFillPlusCircleFill className="shrink-0" />
        <PriceCard text="배송액" price={3000} />
        <FaEquals className="shrink-0" />
        <PriceCard text="총가격" price={totalPrice + SHIPPING} />
      </div>
    </section>
  );
}
