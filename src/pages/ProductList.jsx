import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsAPI } from '../services/api';
import { useCart } from '../contexts/CartContext';

// Helper function to get category icon
const getCategoryIcon = (slug) => {
  const iconMap = {
    'smartphones': '📱',
    'laptops': '💻',
    'fragrances': '🌸',
    'skin-care': '🧴',
    'groceries': '🛒',
    'home-decoration': '🏠',
    'furniture': '🪑',
    'tops': '👕',
    'womens-dresses': '👗',
    'womens-shoes': '👠',
    'mens-shirts': '👔',
    'mens-shoes': '👞',
    'mens-watches': '⌚',
    'womens-watches': '⌚',
    'womens-bags': '👜',
    'womens-jewellery': '💎',
    'sunglasses': '🕶️',
    'beauty': '💄',
    'kitchen-accessories': '🍽️',
    'mobile-accessories': '📲',
    'motorcycle': '🏍️',
    'sports-accessories': '⚽',
    'tablets': '📟',
    'vehicle': '🚗'
  };
  return iconMap[slug] || '🛍️';
};

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const observerRef = useRef();
  const { addToCart } = useCart();

  // Fetch products by category URL
  const fetchProductsByCategory = async (categoryUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(categoryUrl);
      const data = await response.json();
      
      const productsData = data.products || data;
      const total = data.total || productsData.length;
      
      // Process products to ensure proper stock levels
      // Use product ID instead of index to ensure consistency across loads
      const processedProducts = productsData.map((product) => ({
        ...product,
        stock: product.id % 8 === 0 ? 0 : Math.floor((product.id * 17) % 50) + 10,
        inStock: product.id % 8 !== 0
      }));
      
      setProducts(processedProducts);
      setTotalProducts(total);
      setHasMore(false); // Category pages don't have infinite scroll
      setCurrentPage(1);
    } catch (error) {
      console.error('Error loading category products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial data
  const loadInitialData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [productsResponse, categoriesData] = await Promise.all([
        productsAPI.getPaginated(1, 20),
        productsAPI.getCategories()
      ]);
      
      // DummyJSON returns { products: [...], total: number } structure
      const productsData = productsResponse.products || productsResponse;
      const total = productsResponse.total || productsData.length;
      
      // Process products to ensure proper stock levels
      // Use product ID instead of index to ensure consistency across loads
      const processedProducts = productsData.map((product) => ({
        ...product,
        stock: product.id % 8 === 0 ? 0 : Math.floor((product.id * 17) % 50) + 10,
        inStock: product.id % 8 !== 0
      }));
      
      setProducts(processedProducts);
      setTotalProducts(total);
      setHasMore(processedProducts.length < total);
      setCategories(categoriesData.map(category => ({
        id: category.slug,
        name: category.name,
        url: category.url,
        icon: getCategoryIcon(category.slug)
      })));
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load initial data on mount
  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  // Load more products
  const loadMoreProducts = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    try {
      setIsLoadingMore(true);
      
      // Try pagination first, then fallback to category-based loading
      let newProducts = [];
      
      if (currentPage < 5) { // Use pagination for first 5 pages
        const nextPage = currentPage + 1;
        const productsResponse = await productsAPI.getPaginated(nextPage, 20);
        const productsData = productsResponse.products || productsResponse;
        newProducts = productsData;
        setCurrentPage(nextPage);
      } else {
        // After 5 pages, use category-based loading for more variety
        newProducts = await productsAPI.getMoreProducts(products);
        if (newProducts.length === 0) {
          setHasMore(false);
          return;
        }
      }
      
      // Process new products - use deterministic approach
      const processedProducts = newProducts.map((product) => ({
        ...product,
        stock: product.id % 8 === 0 ? 0 : Math.floor((product.id * 17) % 50) + 10,
        inStock: product.id % 8 !== 0
      }));
      
      setProducts(prev => [...prev, ...processedProducts]);
      
      // Update hasMore based on whether we got new products
      if (newProducts.length < 20) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more products:', error);
      setHasMore(false);
    } finally {
      setIsLoadingMore(false);
    }
  }, [currentPage, hasMore, isLoadingMore, products]);

  // Intersection Observer for infinite scroll
  const lastProductElementRef = useCallback((node) => {
    if (isLoadingMore) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    
    if (node) observerRef.current.observe(node);
  }, [isLoadingMore, hasMore, loadMoreProducts]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && category !== 'all' && categories.length > 0) {
      setSelectedCategory(category);
      // Find the category URL and fetch products
      const categoryData = categories.find(cat => cat.id === category);
      if (categoryData && categoryData.url) {
        fetchProductsByCategory(categoryData.url);
      }
    } else if (category === 'all' || !category) {
      setSelectedCategory('all');
      // Only load initial data if we don't have products yet
      if (products.length === 0) {
        loadInitialData();
      }
    }
  }, [searchParams, categories.length]);

  useEffect(() => {
    let filtered = products;

    // No need to filter by category since we fetch directly by category URL
    // Only filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating?.rate || 0) - (a.rating?.rate || 0);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredProducts(filtered);
  }, [products, sortBy, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600">Discover amazing products at great prices</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                const category = e.target.value;
                setSelectedCategory(category);
                if (category === 'all') {
                  // Load all products
                  loadInitialData();
                } else {
                  // Find the category URL and fetch products
                  const categoryData = categories.find(cat => cat.id === category);
                  if (categoryData && categoryData.url) {
                    fetchProductsByCategory(categoryData.url);
                  }
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear Category Filter
          </button>
        )}
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="w-full h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            if (index === filteredProducts.length - 1) {
              return (
                <div key={product.id} ref={lastProductElementRef}>
                  <ProductCard product={product} />
                </div>
              );
            }
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSortBy('name');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Infinite Scroll Loading Indicator */}
      {isLoadingMore && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading more products...</span>
        </div>
      )}

      {/* End of products indicator */}
      {!hasMore && filteredProducts.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">You've reached the end of our products!</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
