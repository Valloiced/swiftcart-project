const BASE_URL = 'https://dummyjson.com';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Products API
export const productsAPI = {
  // Get all products
  getAll: () => apiCall('/products'),
  
  // Get single product
  getById: (id) => apiCall(`/products/${id}`),
  
  // Get products by category
  getByCategory: (category) => apiCall(`/products/category/${category}`),
  
  // Get all categories
  getCategories: () => apiCall('/products/categories'),
  
  // Get limited products
  getLimited: (limit) => apiCall(`/products?limit=${limit}`),
  
  // Get products with pagination
  getPaginated: (page = 1, limit = 20) => apiCall(`/products?limit=${limit}&skip=${(page - 1) * limit}`),
  
  // Search products
  search: (query) => apiCall(`/products/search?q=${encodeURIComponent(query)}`),
  
  // Generate more products by fetching from different categories
  getMoreProducts: async (currentProducts = []) => {
    try {
      const categories = [
        'smartphones', 'laptops', 'fragrances', 'skin-care', 'groceries',
        'home-decoration', 'furniture', 'tops', 'womens-dresses', 'womens-shoes',
        'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches',
        'womens-bags', 'womens-jewellery', 'sunglasses', 'beauty', 'kitchen-accessories',
        'mobile-accessories', 'motorcycle', 'sports-accessories', 'tablets', 'vehicle'
      ];
      
      const additionalProducts = [];
      const usedIds = new Set(currentProducts.map(p => p.id));
      
      // Fetch products from each category
      for (const category of categories) {
        try {
          const response = await apiCall(`/products/category/${category}?limit=5`);
          const categoryProducts = response.products || response;
          
          // Filter out products we already have
          const newProducts = categoryProducts.filter(product => !usedIds.has(product.id));
          additionalProducts.push(...newProducts.slice(0, 3)); // Take max 3 from each category
          
          // Add new IDs to used set
          newProducts.forEach(product => usedIds.add(product.id));
          
          if (additionalProducts.length >= 50) break; // Limit total additional products
        } catch (error) {
          console.warn(`Error fetching products for category ${category}:`, error);
        }
      }
      
      return additionalProducts;
    } catch (error) {
      console.error('Error generating more products:', error);
      return [];
    }
  },
};

// Users API (localStorage based)
export const usersAPI = {
  // Get all users
  getAll: () => {
    try {
      const users = localStorage.getItem('swiftcart_users');
      return Promise.resolve(users ? JSON.parse(users) : []);
    } catch (error) {
      console.error('Error getting users from localStorage:', error);
      return Promise.resolve([]);
    }
  },
  
  // Get single user
  getById: (id) => {
    try {
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      const user = users.find(u => u.id === parseInt(id));
      return Promise.resolve(user || null);
    } catch (error) {
      console.error('Error getting user from localStorage:', error);
      return Promise.resolve(null);
    }
  },
  
  // Add new user
  create: (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      const newUser = {
        id: Date.now(),
        ...userData,
        role: userData.role || 'user'
      };
      users.push(newUser);
      localStorage.setItem('swiftcart_users', JSON.stringify(users));
      return Promise.resolve(newUser);
    } catch (error) {
      console.error('Error creating user in localStorage:', error);
      throw error;
    }
  },
  
  // Update user
  update: (id, userData) => {
    try {
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      const userIndex = users.findIndex(u => u.id === parseInt(id));
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        localStorage.setItem('swiftcart_users', JSON.stringify(users));
        return Promise.resolve(users[userIndex]);
      }
      throw new Error('User not found');
    } catch (error) {
      console.error('Error updating user in localStorage:', error);
      throw error;
    }
  },
  
  // Delete user
  delete: (id) => {
    try {
      const users = JSON.parse(localStorage.getItem('swiftcart_users') || '[]');
      const filteredUsers = users.filter(u => u.id !== parseInt(id));
      localStorage.setItem('swiftcart_users', JSON.stringify(filteredUsers));
      return Promise.resolve({ success: true });
    } catch (error) {
      console.error('Error deleting user from localStorage:', error);
      throw error;
    }
  },
};

// Authentication API
export const authAPI = {
  // Login
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  // Register (using users API)
  register: (userData) => apiCall('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
};

// Cart API (localStorage based)
export const cartAPI = {
  // Get cart from localStorage
  getCart: () => {
    try {
      const cart = localStorage.getItem('swiftcart_cart');
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Error getting cart from localStorage:', error);
      return [];
    }
  },

  // Save cart to localStorage
  saveCart: (cart) => {
    try {
      localStorage.setItem('swiftcart_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  },

  // Add item to cart
  addItem: (product, quantity = 1) => {
    const cart = cartAPI.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    cartAPI.saveCart(cart);
    return cart;
  },

  // Remove item from cart
  removeItem: (productId) => {
    const cart = cartAPI.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    cartAPI.saveCart(updatedCart);
    return updatedCart;
  },

  // Update item quantity
  updateQuantity: (productId, quantity) => {
    const cart = cartAPI.getCart();
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);
    
    cartAPI.saveCart(updatedCart);
    return updatedCart;
  },

  // Clear cart
  clearCart: () => {
    cartAPI.saveCart([]);
    return [];
  },

  // Get cart total
  getTotal: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Get cart item count
  getItemCount: (cart) => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
};

// Orders API (localStorage based)
export const ordersAPI = {
  // Get orders from localStorage
  getOrders: () => {
    try {
      const orders = localStorage.getItem('swiftcart_orders');
      return orders ? JSON.parse(orders) : [];
    } catch (error) {
      console.error('Error getting orders from localStorage:', error);
      return [];
    }
  },

  // Save orders to localStorage
  saveOrders: (orders) => {
    try {
      localStorage.setItem('swiftcart_orders', JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  },

  // Create new order
  createOrder: (orderData) => {
    const orders = ordersAPI.getOrders();
    const newOrder = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      date: new Date().toISOString(),
      status: 'processing'
    };
    
    orders.push(newOrder);
    ordersAPI.saveOrders(orders);
    return newOrder;
  },

  // Update order status
  updateOrderStatus: (orderId, status) => {
    const orders = ordersAPI.getOrders();
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    );
    ordersAPI.saveOrders(updatedOrders);
    return updatedOrders;
  },

  // Get orders by user ID
  getOrdersByUser: (userId) => {
    const orders = ordersAPI.getOrders();
    return orders.filter(order => order.userId === userId);
  }
};
