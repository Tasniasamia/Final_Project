import React, { useContext, useState } from 'react';
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement, Elements, useElements, useStripe} from '../../src';

// import '../styles/common.css';
// import './Common.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import { AuthContext } from '../../../Pages/Shared/AuthProvider';
const CheckoutForm = ({price,Cart}) => {
  const{data}=useContext(AuthContext);
  const[error,setError]=useState("");
  const[clientsecret,setClientSecret]=useState("");
const[transactiion,setTransaction]=useState("");
const[processing,setProcessing]=useState(false);
  console.log(clientsecret);
    const stripe = useStripe();
    const elements = useElements();
  const[axiosSecure]=useAxiosSecure();


  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price})
    .then(res=>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)})
  
  
  
  },[price])
  
  
  
    const handleSubmit = async (event) => {

      event.preventDefault();
  
      if (!stripe || !elements) {
       return;
      }
  
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
   
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError(" ");
      }
      setProcessing(true);
      const {paymentIntent, error:errorhandle} = await stripe.confirmCardPayment(
        clientsecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: data?.email || 'anonymous',
              name:data?.displayName || 'no user'
              ,
            },
          },
        },
      );



if(errorhandle){
  console.log("get error",errorhandle);
}
setProcessing(false);
console.log(paymentIntent);
if(paymentIntent.status==="succeeded"){
 const payment={
  email: data?.email,
  transaction_id: paymentIntent.id,
  price:price,
  quantity:Cart.length,
  items_id:Cart.map(index=>index._id),
  menuitem_id:Cart.map(index=>index.unic_id),
  FoodItem:Cart.map(index=>index.name),
  activeStatus:"pending"
 }
 console.log(payment);
 axiosSecure.post('/Payment',payment)
 .then(res=>{console.log(res.data);
  if(res.data.insertedId){
    alert("You have succeded");
  }


})
  const transaction_id=paymentIntent.id;
  setTransaction(transaction_id);
  console.log(transaction_id);
  
}
    
    }
    
   
    
    
    
    
    
    
    







    return (
   <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit"className='btn btn-primary m-5' disabled={!stripe || !clientsecret || processing}>
        Pay
      </button>
    </form>
{error}
{transactiion && <p className='text-green-600'>Trasaction has completed by transaction id</p>}
    </>
    );
};

export default CheckoutForm;