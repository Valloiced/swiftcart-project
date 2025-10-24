import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const userData = localStorage.getItem('swiftcart_user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('swiftcart_user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Initialize default users if they don't exist
  const initializeDefaultUsers = () => {
    const existingUsers = localStorage.getItem('swiftcart_users');
    if (!existingUsers) {
      const defaultUsers = [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@swiftcart.com',
          password: 'admin123',
          role: 'admin',
          phone: '+1-555-0101',
          address: '123 Admin Street',
          city: 'Admin City',
          state: 'AC',
          zipCode: '12345'
        },
        {
          id: 2,
          name: 'Super Admin',
          email: 'superadmin@swiftcart.com',
          password: 'superadmin123',
          role: 'admin',
          phone: '+1-555-0102',
          address: '456 Super Admin Ave',
          city: 'Super City',
          state: 'SC',
          zipCode: '54321'
        }
      ];
      localStorage.setItem('swiftcart_users', JSON.stringify(defaultUsers));
    }
  };

  // Login function
  const login = async (credentials) => {
    setIsLoading(true);
    try {
      // Initialize default users if needed
      initializeDefaultUsers();
      
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
      
      if (user) {
        const { password, ...userWithoutPassword } = user;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        localStorage.setItem('swiftcart_user', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setIsLoading(true);
    try {
      // Initialize default users if needed
      initializeDefaultUsers();
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      const newUser = {
        id: Date.now(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        password: userData.password,
        role: 'user',
        phone: userData.phone || '',
        address: userData.address || '',
        city: userData.city || '',
        state: userData.state || '',
        zipCode: userData.zipCode || ''
      };

      // Add new user to localStorage
      users.push(newUser);
      localStorage.setItem('swiftcart_users', JSON.stringify(users));

      const { password, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('swiftcart_user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('swiftcart_user');
  };

  // Update user profile
  const updateProfile = (updatedData) => {
    try {
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('swiftcart_user', JSON.stringify(updatedUser));
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, error: error.message };
    }
  };

  // Check if user is admin
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
