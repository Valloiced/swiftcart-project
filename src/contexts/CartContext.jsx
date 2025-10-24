import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '../services/api';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { success } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const cart = cartAPI.getCart();
        setCartItems(cart);
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
      }
    };

    loadCart();
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length >= 0) {
      cartAPI.saveCart(cartItems);
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setIsLoading(true);
    try {
      const updatedCart = cartAPI.addItem(product, quantity);
      setCartItems(updatedCart);
      success(`${product.title} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setIsLoading(true);
    try {
      const updatedCart = cartAPI.removeItem(productId);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setIsLoading(true);
    try {
      const updatedCart = cartAPI.updateQuantity(productId, quantity);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setIsLoading(true);
    try {
      const updatedCart = cartAPI.clearCart();
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error clearing cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get cart total
  const getTotal = () => {
    return cartAPI.getTotal(cartItems);
  };

  // Get cart item count
  const getItemCount = () => {
    return cartAPI.getItemCount(cartItems);
  };

  // Check if item is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Get item quantity in cart
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
    isInCart,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
