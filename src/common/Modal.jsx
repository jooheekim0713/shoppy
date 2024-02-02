import { IoIosClose } from 'react-icons/io';
import React from 'react';

export default function Modal({ type, text, onClose }) {
  const typeHandle = () => {
    switch (type) {
      case 'normal':
        return '알람창입니다.';

      case 'warning':
        return '경고창입니다.';

      default:
        return '정의되지 않은 알림 입니다.';
    }
  };

  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative bg-gray-100 m-3 p-5 ">
        <h3> {typeHandle(type)} </h3>
        <p>{text}</p>
        <button className="fixed top-4 right-4" onClick={onClose}>
          <IoIosClose />
        </button>
      </div>
    </section>
  );
}
