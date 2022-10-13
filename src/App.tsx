import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import { ShoppingCartPanel } from './pages/Cart/ShoppingCartPanel';
import { CheckoutForm } from './pages/Checkout/CheckoutForm';
import { PaymentInterface } from './pages/Payment/PaymentInterface';

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path='/shopping-cart' element={<ShoppingCartPanel />}></Route>
        <Route path='/checkout-form' element={<CheckoutForm />}></Route>
        <Route path='/payment-interface' element={<PaymentInterface />}></Route>
        <Route path='*' element={<Navigate to={'/shopping-cart'} />}></Route>
      </Routes>
    </Layout>
  );
}
