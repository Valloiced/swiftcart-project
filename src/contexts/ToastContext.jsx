import React, { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const success = (message, duration = 3000) => {
    toast.success(message, { duration });
  };

  const error = (message, duration = 3000) => {
    toast.error(message, { duration });
  };

  const info = (message, duration = 3000) => {
    toast(message, { 
      duration,
      icon: 'ℹ️',
      style: {
        background: '#3b82f6',
        color: '#fff',
      },
    });
  };

  const warning = (message, duration = 3000) => {
    toast(message, {
      duration,
      icon: '⚠️',
      style: {
        background: '#eab308',
        color: '#fff',
      },
    });
  };

  return (
    <ToastContext.Provider value={{ success, error, info, warning }}>
      {children}
    </ToastContext.Provider>
  );
};
