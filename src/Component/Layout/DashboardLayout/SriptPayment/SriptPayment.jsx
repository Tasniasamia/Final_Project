import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../PaymentProcess/CheckoutForm';
import Sectiontitle from '../../../Pages/Shared/Sectiontitle/Sectiontitle';
import useCart from '../../../../../Hooks/useCart';

const SriptPayment = () => {
    const [Cart]=useCart();
    const price=(Cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0)).toFixed(2);    
      const totalprice=parseFloat(price);
      console.log(totalprice);
      
      
      
      
      const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    return (
        <div className='w-full p-5'>
        <Sectiontitle title=" Pay Here"subtitle="Payment"></Sectiontitle>
        <Elements stripe={stripePromise}>
        <CheckoutForm price={totalprice} Cart={Cart}></CheckoutForm>
      </Elements>
      </div>
    );
};

export default SriptPayment;