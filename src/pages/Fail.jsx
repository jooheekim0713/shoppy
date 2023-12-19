import React from 'react';
import { MdOutlineSmsFailed } from 'react-icons/md';

export default function Fail() {
  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        결제 오류 발생
      </p>
      <div className="mx-auto items-center justify-center mt-10">
        <MdOutlineSmsFailed className="w-full text-9xl mb-5 text-gray-600" />
        <p className="font-semibold">결제가 실패했습니다. </p>
      </div>
    </section>
  );
}
