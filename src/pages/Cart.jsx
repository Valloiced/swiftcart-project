import { Link } from  'react-router-dom';

import { useCart } from  '../contexts/CartContext';

  

const  Cart  = () => {

const { cartItems, updateQuantity, removeItem, getTotal, isLoading } =  useCart();

  

const  subtotal  =  getTotal();

const  shipping  =  subtotal  >  100  ?  0  :  9.99;

const  tax  =  subtotal  *  0.08; // 8% tax

const  total  =  subtotal  +  shipping  +  tax;

  

const  availableItems  =  cartItems.filter(item  =>  item.quantity  >  0);

const  unavailableItems  =  cartItems.filter(item  =>  item.quantity  <=  0);

  

return (

<div  className="max-w-6xl mx-auto">

<h1  className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

  

{cartItems.length === 0 ? (

<div  className="text-center py-12">

<div  className="text-6xl mb-4">🛒</div>

<h2  className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>

<p  className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>

<Link

to="/products"

className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"

>

Start Shopping

</Link>

</div>

) : (

<div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">

{/* Cart Items */}

<div  className="lg:col-span-2 space-y-4">

{/* Available Items */}

{availableItems.length > 0 && (

<div>

<h2  className="text-xl font-semibold text-gray-900 mb-4">Available Items</h2>

<div  className="space-y-4">

{availableItems.map((item) => (

<div  key={item.id}  className="bg-white p-6 rounded-lg shadow-md">

<div  className="flex items-center space-x-4">

<img

src={item.thumbnail || item.image}

alt={item.title}

className="w-20 h-20 object-cover rounded-lg"

/>

<div  className="flex-1">

<h3  className="text-lg font-semibold text-gray-900">{item.title}</h3>

<p  className="text-gray-600">${item.price}</p>

</div>

<div  className="flex items-center space-x-3">

<button

onClick={() =>  updateQuantity(item.id, item.quantity - 1)}

className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"

>

<svg  className="w-4 h-4"  fill="none"  stroke="currentColor"  viewBox="0 0 24 24">

<path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M20 12H4"  />

</svg>

</button>

<span  className="text-lg font-medium w-12 text-center">{item.quantity}</span>

<button

onClick={() =>  updateQuantity(item.id, item.quantity + 1)}

className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"

>

<svg  className="w-4 h-4"  fill="none"  stroke="currentColor"  viewBox="0 0 24 24">

<path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M12 6v6m0 0v6m0-6h6m-6 0H6"  />

</svg>

</button>

</div>

<div  className="text-right">

<p  className="text-lg font-semibold text-gray-900">

${(item.price * item.quantity).toFixed(2)}

</p>

<button

onClick={() =>  removeItem(item.id)}

className="text-red-600 hover:text-red-800 text-sm"

>

Remove

</button>

</div>

</div>

</div>

))}

</div>

</div>

)}

  

{/* Unavailable Items */}

{unavailableItems.length > 0 && (

<div>

<h2  className="text-xl font-semibold text-gray-900 mb-4">Currently Unavailable</h2>

<div  className="space-y-4">

{unavailableItems.map((item) => (

<div  key={item.id}  className="bg-gray-100 p-6 rounded-lg border-2 border-red-200">

<div  className="flex items-center space-x-4">

<img

src={item.thumbnail || item.image}

alt={item.title}

className="w-20 h-20 object-cover rounded-lg opacity-50"

/>

<div  className="flex-1">

<h3  className="text-lg font-semibold text-gray-700">{item.title}</h3>

<p  className="text-gray-600">${item.price}</p>

<p  className="text-red-600 text-sm font-medium">Out of Stock</p>

</div>

<div  className="text-right">

<p  className="text-lg font-semibold text-gray-500">

${(item.price * item.quantity).toFixed(2)}

</p>

<button

onClick={() =>  removeItem(item.id)}

className="text-red-600 hover:text-red-800 text-sm"

>

Remove

</button>

</div>

</div>

</div>

))}

</div>

</div>

)}

</div>

  

{/* Order Summary */}

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

  

{shipping > 0 && (

<div  className="bg-blue-50 p-3 rounded-lg mb-6">

<p  className="text-sm text-blue-800">

Add ${(100 - subtotal).toFixed(2)} more for free shipping!

</p>

</div>

)}

  

<div  className="space-y-3">

<Link

to="/checkout"

className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-center block"

>

Proceed to Checkout

</Link>

<Link

to="/products"

className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 text-center block"

>

Continue Shopping

</Link>

</div>

  

<div  className="mt-6 pt-6 border-t">

<h3  className="font-semibold text-gray-900 mb-2">Secure Checkout</h3>

<div  className="flex space-x-2">

<div  className="flex-1 bg-gray-100 p-2 rounded text-center text-sm">

💳 Credit Card

</div>

<div  className="flex-1 bg-gray-100 p-2 rounded text-center text-sm">

💰 Cash on Delivery

</div>

</div>

</div>

</div>

</div>

</div>

)}

</div>

);

};

  

export  default  Cart;
