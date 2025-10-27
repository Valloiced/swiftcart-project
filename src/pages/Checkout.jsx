import { useState } from  'react';

import { Link, useNavigate } from  'react-router-dom';

import { useCart } from  '../contexts/CartContext';

import { useAuth } from  '../contexts/AuthContext';

import { ordersAPI } from  '../services/api';

  

const  Checkout  = () => {

const [currentStep, setCurrentStep] =  useState(1);

const [formData, setFormData] =  useState({

// Shipping Information

firstName:  '',

lastName:  '',

email:  '',

phone:  '',

address:  '',

city:  '',

state:  '',

zipCode:  '',

country:  'US',

// Payment Information

paymentMethod:  'card',

cardNumber:  '',

expiryDate:  '',

cvv:  '',

cardName:  ''

});

const { cartItems, getTotal, clearCart } =  useCart();

const { user } =  useAuth();

const  navigate  =  useNavigate();

  

const  handleInputChange  = (e) => {

const { name, value } =  e.target;

setFormData(prev  => ({

...prev,

[name]:  value

}));

};

  

const  handleNext  = () => {

if (currentStep  <  3) {

setCurrentStep(currentStep  +  1);

}

};

  

const  handlePrevious  = () => {

if (currentStep  >  1) {

setCurrentStep(currentStep  -  1);

}

};

  

const  handleSubmit  = (e) => {

e.preventDefault();

// Create order

const  orderData  = {

userId:  user?.id,

customerName:  `${formData.firstName}  ${formData.lastName}`,

customerEmail:  formData.email,

items:  cartItems,

total:  total,

shippingAddress: {

name:  `${formData.firstName}  ${formData.lastName}`,

address:  formData.address,

city:  formData.city,

state:  formData.state,

zipCode:  formData.zipCode

},

paymentMethod:  formData.paymentMethod

};

ordersAPI.createOrder(orderData);

clearCart();

alert('Order placed successfully! Thank you for your purchase.');

navigate('/orders');

};

  

const  subtotal  =  getTotal();

const  shipping  =  subtotal  >  100  ?  0  :  9.99;

const  tax  =  subtotal  *  0.08;

const  total  =  subtotal  +  shipping  +  tax;

  

const  steps  = [

{ id:  1, name:  'Shipping Information', description:  'Enter your delivery details' },

{ id:  2, name:  'Payment Method', description:  'Choose your payment option' },

{ id:  3, name:  'Review & Place Order', description:  'Confirm your order details' }

];

  

return (

<div  className="max-w-6xl mx-auto">

<h1  className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

  

{/* Progress Steps */}

<div  className="mb-8">

<div  className="flex items-center justify-between">

{steps.map((step, index) => (

<div  key={step.id}  className="flex items-center">

<div  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${

currentStep >= step.id

? 'bg-blue-600 border-blue-600 text-white'

: 'border-gray-300 text-gray-500'

}`}>

{currentStep > step.id ? (

<svg  className="w-6 h-6"  fill="currentColor"  viewBox="0 0 20 20">

<path  fillRule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clipRule="evenodd"  />

</svg>

) : (

<span  className="text-sm font-medium">{step.id}</span>

)}

</div>

<div  className="ml-3 hidden sm:block">

<p  className={`text-sm font-medium ${

currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'

}`}>

{step.name}

</p>

<p  className="text-xs text-gray-500">{step.description}</p>

</div>

{index < steps.length - 1 && (

<div  className={`hidden sm:block w-24 h-0.5 ml-8 ${

currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'

}`}  />

)}

</div>

))}

</div>

</div>

  

<div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">

{/* Checkout Form */}

<div  className="lg:col-span-2">

<form  onSubmit={handleSubmit}  className="space-y-8">

{/* Step 1: Shipping Information */}

{currentStep === 1 && (

<div  className="bg-white p-6 rounded-lg shadow-md">

<h2  className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>

<div  className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

First Name *

</label>

<input

type="text"

name="firstName"

value={formData.firstName}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Last Name *

</label>

<input

type="text"

name="lastName"

value={formData.lastName}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Email Address *

</label>

<input

type="email"

name="email"

value={formData.email}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Phone Number *

</label>

<input

type="tel"

name="phone"

value={formData.phone}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div  className="md:col-span-2">

<label  className="block text-sm font-medium text-gray-700 mb-2">

Street Address *

</label>

<input

type="text"

name="address"

value={formData.address}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

City *

</label>

<input

type="text"

name="city"

value={formData.city}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

State *

</label>

<input

type="text"

name="state"

value={formData.state}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

ZIP Code *

</label>

<input

type="text"

name="zipCode"

value={formData.zipCode}

onChange={handleInputChange}

required

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Country *

</label>

<select

name="country"

value={formData.country}

onChange={handleInputChange}

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

>

<option  value="US">United States</option>

<option  value="CA">Canada</option>

<option  value="UK">United Kingdom</option>

</select>

</div>

</div>

</div>

)}

  

{/* Step 2: Payment Method */}

{currentStep === 2 && (

<div  className="bg-white p-6 rounded-lg shadow-md">

<h2  className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>

<div  className="space-y-4 mb-6">

<div  className="flex items-center">

<input

type="radio"

id="card"

name="paymentMethod"

value="card"

checked={formData.paymentMethod === 'card'}

onChange={handleInputChange}

className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"

/>

<label  htmlFor="card"  className="ml-3 text-sm font-medium text-gray-700">

Credit/Debit Card

</label>

</div>

<div  className="flex items-center">

<input

type="radio"

id="cod"

name="paymentMethod"

value="cod"

checked={formData.paymentMethod === 'cod'}

onChange={handleInputChange}

className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"

/>

<label  htmlFor="cod"  className="ml-3 text-sm font-medium text-gray-700">

Cash on Delivery

</label>

</div>

</div>

  

{formData.paymentMethod === 'card' && (

<div  className="space-y-4">

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Card Number *

</label>

<input

type="text"

name="cardNumber"

value={formData.cardNumber}

onChange={handleInputChange}

placeholder="1234 5678 9012 3456"

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div  className="grid grid-cols-2 gap-4">

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Expiry Date *

</label>

<input

type="text"

name="expiryDate"

value={formData.expiryDate}

onChange={handleInputChange}

placeholder="MM/YY"

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

CVV *

</label>

<input

type="text"

name="cvv"

value={formData.cvv}

onChange={handleInputChange}

placeholder="123"

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

</div>

<div>

<label  className="block text-sm font-medium text-gray-700 mb-2">

Name on Card *

</label>

<input

type="text"

name="cardName"

value={formData.cardName}

onChange={handleInputChange}

className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

/>

</div>

</div>

)}

  

{formData.paymentMethod === 'cod' && (

<div  className="bg-yellow-50 p-4 rounded-lg">

<p  className="text-sm text-yellow-800">

You will pay cash when your order is delivered. Please have the exact amount ready.

</p>

</div>

)}

</div>

)}

  

{/* Step 3: Review & Place Order */}

{currentStep === 3 && (

<div  className="bg-white p-6 rounded-lg shadow-md">

<h2  className="text-xl font-semibold text-gray-900 mb-6">Review Your Order</h2>

<div  className="space-y-6">

<div>

<h3  className="text-lg font-medium text-gray-900 mb-3">Shipping Address</h3>

<div  className="text-gray-600">

<p>{formData.firstName}  {formData.lastName}</p>

<p>{formData.address}</p>

<p>{formData.city}, {formData.state}  {formData.zipCode}</p>

<p>{formData.country}</p>

<p>{formData.email}</p>

<p>{formData.phone}</p>

</div>

</div>

  

<div>

<h3  className="text-lg font-medium text-gray-900 mb-3">Payment Method</h3>

<div  className="text-gray-600">

{formData.paymentMethod === 'card' ? (

<p>Credit/Debit Card ending in {formData.cardNumber.slice(-4)}</p>

) : (

<p>Cash on Delivery</p>

)}

</div>

</div>

  

<div>

<h3  className="text-lg font-medium text-gray-900 mb-3">Order Items</h3>

<div  className="space-y-2">

{cartItems.map((item) => (

<div  key={item.id}  className="flex items-center justify-between py-2 border-b">

<div  className="flex items-center space-x-3">

<img

src={item.thumbnail || item.image}

alt={item.title}

className="w-12 h-12 object-cover rounded"

/>

<div>

<p  className="font-medium">{item.title}</p>

<p  className="text-sm text-gray-600">Qty: {item.quantity}</p>

</div>

</div>

<p  className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>

</div>

))}

</div>

</div>

</div>

</div>

)}

  

{/* Navigation Buttons */}

<div  className="flex justify-between">

<button

type="button"

onClick={handlePrevious}

disabled={currentStep === 1}

className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"

>

Previous

</button>

{currentStep < 3 ? (

<button

type="button"

onClick={handleNext}

className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"

>

Next

</button>

) : (

<button

type="submit"

className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"

>

Place Order

</button>

)}

</div>

</form>

</div>

  

{/* Order Summary Sidebar */}

<div  className="lg:col-span-1">

<div  className="bg-white p-6 rounded-lg shadow-md sticky top-4">

<h2  className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

<div  className="space-y-3 mb-6">

<div  className="flex justify-between">

<span  className="text-gray-600">Subtotal</span>

<span  className="font-medium">${subtotal.toFixed(2)}</span>

</div>

<div  className="flex justify-between">

<span  className="text-gray-600">Shipping</span>

<span  className="font-medium">

{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}

</span>

</div>

<div  className="flex justify-between">

<span  className="text-gray-600">Tax</span>

<span  className="font-medium">${tax.toFixed(2)}</span>

</div>

<div  className="border-t pt-3">

<div  className="flex justify-between text-lg font-semibold">

<span>Total</span>

<span>${total.toFixed(2)}</span>

</div>

</div>

</div>

  

<div  className="text-xs text-gray-500 space-y-1">

<p>• Secure 256-bit SSL encryption</p>

<p>• 30-day return policy</p>

<p>• Free shipping on orders over $100</p>

</div>

</div>

</div>

</div>

</div>

);

};

  

export  default  Checkout;