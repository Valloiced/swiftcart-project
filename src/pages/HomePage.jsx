import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

// Helper function to get category icon
const getCategoryIcon = (slug) => {
    const iconMap = {
        'smartphones': '📱',
        'laptops': '📱',
        'fragrances': '📱',
        'skin-care': '📱',
        'groceries': '📱',
        'home-decoration': '📱',
        'furniture': '📱',
        'tops': '📱',
        'womens-dresses': '📱',
        'womens-shoes': '📱',
        'mens-shirts': '📱',
        'mens-shoes': '📱',
        'mens-watches': '⌚',
        'womens-watches': '⌚',
        'womens-bags': '📱',
        'womens-jewellery': '📱',
        'sunglasses': '📱',
        'beauty': '📱',
        'kitchen-accessories': '📱',
        'mobile-accessories': '📱',
        'motorcycle': '📱',
        'sports-accessories': '⚽',
        'tablets': '📱',
        'vehicle': '📱'
    };
    return iconMap[slug] || '📱';
};

const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAllCategories, setShowAllCategories] = useState(false);

    // Limit categories to 6 initially
    const displayedCategories = showAllCategories ? categories :
    categories.slice(0, 6);

    useEffect(() => {
        const loadData = async () => {

            try {

                setIsLoading(true);

                const [productsResponse, categoriesData] = await Promise.all([

                    productsAPI.getLimited(4),

                    productsAPI.getCategories()

                ]);

                // DummyJSON returns { products: [...] } structure

                const productsData = productsResponse.products || productsResponse;

                // Process products to ensure proper stock levels

                const processedProducts = productsData.map((product, index) => ({

                    ...product,

                    // Ensure most products are in stock, only a few are out of stock

                    stock: index % 8 === 0 ? 0 : Math.floor(Math.random() * 50) + 10,

                    inStock: index % 8 !== 0

                }));

                setFeaturedProducts(processedProducts);

                setCategories(categoriesData.map(category => ({

                    id: category.slug,

                    name: category.name,

                    icon: getCategoryIcon(category.slug),

                    url: category.url

                })));

            } catch (error) {

                console.error('Error loading data:', error);

            } finally {

                setIsLoading(false);

            }

        };


loadData
();

}, []);





return (

<div className="space-y-12">

{/* Hero Section */}

<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white

py-20 rounded-lg relative overflow-hidden">

{/* Swift Trail Effects */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

{/* Trail 1 */}

<div

className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent viawhite/80 to-transparent animate-swift-trail shadow-

[0_0_10px_rgba(255,255,255,0.5)]"

style={{

    top: '20%',

    left: '-600px',

    animationDelay: '0s'

}}

/>

{/* Trail 2 */}

<div

className="absolute w-[400px] h-[2px] bg-gradient-to-r from-transparent viawhite/70 to-transparent animate-swift-trail shadow-

[0_0_8px_rgba(255,255,255,0.4)]"

style={{

    top: '50%',

    left: '-400px',

    animationDelay: '0.5s'

}}

/>

{/* Trail 3 */}

<div

className="absolute w-[500px] h-[1px] bg-gradient-to-r from-transparent viawhite/75 to-transparent animate-swift-trail shadow-

[0_0_10px_rgba(255,255,255,0.5)]"

style={{

    top: '70%',

    left: '-500px',

    animationDelay: '1s'

}}

/>

{/* Trail 4 */}

<div

className="absolute w-[550px] h-[2px] bg-gradient-to-r from-transparent viawhite/65 to-transparent animate-swift-trail shadow-

[0_0_8px_rgba(255,255,255,0.4)]"

style={{

    top: '85%',

    left: '-550px',

    animationDelay: '1.5s'

}}

/>

{/* Trail 5 */}

<div

className="absolute w-[380px] h-[1px] bg-gradient-to-r from-transparent viawhite/60 to-transparent animate-swift-trail shadow-

[0_0_6px_rgba(255,255,255,0.3)]"

style={{

    top: '10%',

    left: '-380px',

    animationDelay: '2s'

}}

/>

{/* Trail 6 */}

<div

className="absolute w-[420px] h-[1px] bg-gradient-to-r from-transparent viawhite/55 to-transparent animate-swift-trail shadow-

[0_0_6px_rgba(255,255,255,0.3)]"

style={{

    top: '40%',

    left: '-420px',

    animationDelay: '2.5s'

}}

/>

{/* Reverse Trail 1 */}

<div

className="absolute w-[450px] h-[2px] bg-gradient-to-r from-transparent viawhite/60 to-transparent animate-swift-trail-reverse shadow-

[0_0_8px_rgba(255,255,255,0.4)]"

style={{

    top: '35%',

    right: '-450px',

    animationDelay: '0.8s'

}}

/>

{/* Reverse Trail 2 */}

<div

className="absolute w-[350px] h-[2px] bg-gradient-to-r from-transparent viawhite/50 to-transparent animate-swift-trail-reverse shadow-

[0_0_6px_rgba(255,255,255,0.3)]"

style={{

    top: '60%',

    right: '-350px',

    animationDelay: '1.5s'

}}

/>

{/* Reverse Trail 3 */}

<div

className="absolute w-[520px] h-[1px] bg-gradient-to-r from-transparent viawhite/70 to-transparent animate-swift-trail-reverse shadow-

[0_0_8px_rgba(255,255,255,0.4)]"

style={{

    top: '15%',

    right: '-520px',

    animationDelay: '2s'

}}

/>

{/* Reverse Trail 4 */}

<div

className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent viawhite/55 to-transparent animate-swift-trail-reverse shadow-

[0_0_6px_rgba(255,255,255,0.3)]"

style={{

    top: '75%',

    right: '-400px',

    animationDelay: '2.8s'

}}

/>

{/* Reverse Trail 5 */}

<div

className="absolute w-[480px] h-[1px] bg-gradient-to-r from-transparent viawhite/65 to-transparent animate-swift-trail-reverse shadow-

[0_0_8px_rgba(255,255,255,0.4)]"

style={{

    top: '90%',

    right: '-480px',

    animationDelay: '3.5s'

}}

/>

</div>

<div className="text-center relative z-10">

<h1 className="text-5xl font-bold mb-6">Welcome to <span

className="italic">SwiftCart</span></h1>

<p className="text-xl mb-8 max-w-2xl mx-auto">

Your one-stop destination for groceries, electronics, and clothing.

Shop with confidence and convenience.

</p>

<Link

to="/products"

className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold

hover:bg-gray-100 transition duration-300"

>

Shop Now

</Link>

</div>

</section>



{/* Categories Section */}

<section>

<div className="text-center mb-8">

<h2 className="text-3xl font-bold mb-4">Shop by Category</h2>

<p className="text-gray-600">Discover products from our wide range of

categories</p>

</div>

{isLoading ? (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{[1, 2, 3, 4, 5, 6].map((i) => (

<div key={i} className="bg-white p-8 rounded-lg shadow-md animate-pulse">

<div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>

<div className="h-6 bg-gray-300 rounded mx-auto w-24"></div>

</div>

))}

</div>

) : (

<>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



{displayedCategories.map((category) => (



<Link



key={category.id}



to={`/products?category=${category.id}`}



className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition



duration-300 text-center group"



>



<div className="text-5xl mb-3 group-hover:scale-110 transition-transform



duration-300">



{category.icon}



</div>



<h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600



transition-colors duration-300">



{category.name}



</h3>



</Link>



))}



</div>



{/* Show More/Less Button */}



{categories.length > 6 && (



<div className="text-center mt-8">



<button



onClick={() => setShowAllCategories(!showAllCategories)}



className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold



hover:bg-blue-700 transition duration-300 flex items-center gap-2 mx-auto"



>



{showAllCategories ? (



<>

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0

24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5

15l7-7 7 7" />

</svg>

Show Less Categories

</>

) : (

<>

<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0

24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19

9l-7 7-7-7" />

</svg>

Show All Categories ({categories.length})

</>

)}

</button>

</div>

)}

</>

)}

</section>



{/* Featured Products Section */}

<section>

<div className="flex justify-between items-center mb-8">

<h2 className="text-3xl font-bold">Featured Products</h2>

<Link

to="/products"

className="text-blue-600 hover:text-blue-800 font-semibold"

>

View All Products →

</Link>

</div>

{isLoading ? (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{[1, 2, 3, 4].map((i) => (

<div key={i} className="bg-white rounded-lg shadow-md overflow-hidden

animate-pulse">

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

) : (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{featuredProducts.map((product) => (

<ProductCard key={product.id} product={product} />

))}

</div>

)}

</section>



{/* Features Section */}

<section className="bg-gray-100 py-16 rounded-lg">

<div className="text-center mb-12">

<h2 className="text-3xl font-bold mb-4">Why Choose SwiftCart?</h2>

<p className="text-gray-600 max-w-2xl mx-auto">

We're committed to providing you with the best shopping experience possible.

</p>

</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="text-center">

<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center

justify-center mx-auto mb-4">

<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
viewBox="0 0 24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20

7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />

</svg>

</div>

<h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>

<p className="text-gray-600">Quick and reliable delivery to your

doorstep</p>

</div>

<div className="text-center">
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center
justify-center mx-auto mb-4">

<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"

viewBox="0 0 24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9

12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

</svg>

</div>

<h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>

<p className="text-gray-600">100% satisfaction guarantee on all products</p>

</div>

<div className="text-center">

<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center

justify-center mx-auto mb-4">

<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor"

viewBox="0 0 24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12

8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402

2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />

</svg>

</div>

<h3 className="text-xl font-semibold mb-2">Secure Payment</h3>

<p className="text-gray-600">Safe and secure payment options</p>

</div>

</div>

</section>

</div>

);

};



export default HomePage;