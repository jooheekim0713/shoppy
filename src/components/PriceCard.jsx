import React from 'react';
import { numberWithCommas } from '../common/utils.ts';

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-grap-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-xl md:text-2xl">
        {numberWithCommas(price)}원
      </p>
    </div>
  );
}
