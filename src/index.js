import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Customers from './Customers';
import NewCustomers from './NewCustomer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router,  Routes, Route } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Customers/>} />
            <Route path="/new" element={<NewCustomers/>} />
        </Routes>
    </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
