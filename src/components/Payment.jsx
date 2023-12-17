import { useEffect, useRef } from 'react';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';
import { v4 as uuid } from 'uuid';
import React from 'react';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = uuid();

export default function Payment({ total }) {
  const {
    cartQuery: { data: products },
  } = useCart();
  const { user } = useAuthContext();
  const paymentWidgetRef = useRef(null);
  const price = total;
  let orderNames = useRef('');
  useEffect(() => {
    if (products.length === 1) {
      orderNames.current = products[0].title;
    } else {
      orderNames.current = `${products[0].title}외 ${products.length - 1}건`;
    }
  }, [products]);
  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: customerKey,
        orderName: orderNames.current,
        customerName: user.displayName,
        customerEmail: user.email,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      paymentWidget.renderPaymentMethods('#payment-widget', price);
      paymentWidgetRef.current = paymentWidget;
    })();
  }, [price]);

  return (
    <div>
      <div id="payment-widget" />
      <Button className="w-full" text="결제하기" onClick={handlePayment} />
    </div>
  );
}
