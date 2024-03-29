import React, { useState } from 'react';
import ModalPortal from '../common/Portal.js';
import Modal from '../common/Modal';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';
import { numberWithCommas } from '../common/utils';

const ICON_CLASS = 'transition-all cursor-pointer hover:scale-105 mx-2';

export default function CartItem({
  product,
  product: { id, image, title, price, option, quantity },
}) {
  const [modalOn, setModalOn] = useState(false);
  const { addOrUpdateItem, removeItem } = useCart();

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  const handleMinus = () => {
    if (quantity < 2) {
      handleModal();
      return;
    }
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => removeItem.mutate(id);
  return (
    <>
      <li className="flex justify-between my-2 items-center">
        <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
        <div className="flex-1 flex justify-between ml-4">
          <div className="basis-3/5">
            <p className="text-lg">{title}</p>
            <p className="text-xl font-bold text-brand">{option}</p>
            <p>{numberWithCommas(price)}원</p>
          </div>
          <div className="text-2xl flex items-center">
            <AiOutlineMinusSquare
              className={ICON_CLASS}
              onClick={handleMinus}
            />
            <span>{quantity}</span>
            <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
            <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
          </div>
        </div>
      </li>
      <ModalPortal>
        {modalOn && (
          <Modal
            type="warning"
            text="갯수는 1개 이상이어야합니다."
            onClose={() => setModalOn(false)}
          />
        )}
      </ModalPortal>
    </>
  );
}
