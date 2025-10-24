# SwiftCart - E-Commerce React Application

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. SwiftCart is designed as a multi-category online marketplace for groceries, electronics, and clothing.

## 🚀 MVP Features (In Scope)

- **User Authentication**: Registration, login, and profile management
- **Multi-Category Shopping**: Browse groceries, electronics, and clothing
- **Product Catalog**: Advanced filtering and search functionality
- **Product Details**: Comprehensive product information with image galleries
- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout Process**: Multi-step checkout with shipping and payment options
- **Order Tracking**: Order history and tracking for users
- **Admin Dashboard**: Product and order management for administrators
- **Payment Options**: Cash on delivery and online payment gateway support
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, intuitive interface built with Tailwind CSS

## 🚫 Out of Scope (Future Phases)

- **AI-Driven Recommendations**: Personalized product suggestions
- **Loyalty Programs**: Discount vouchers and rewards systems
- **Multi-Language Support**: Internationalization features
- **Multi-Currency Support**: Multiple currency options
- **Third-Party Delivery Integration**: External delivery service APIs

## 🛠️ Tech Stack

- **Frontend**: React 18 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Heroicons (via SVG)
- **Development**: ESLint for code quality

## 📁 Project Structure

```
swiftcart/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── ProductCard.jsx # Product card component
│   ├── pages/              # Main application pages
│   │   ├── HomePage.jsx    # Landing page
│   │   ├── ProductList.jsx # Product catalog
│   │   ├── ProductDetails.jsx # Individual product page
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Checkout.jsx    # Checkout process
│   │   ├── Login.jsx       # User login
│   │   ├── Register.jsx    # User registration
│   │   ├── Profile.jsx     # User profile management
│   │   ├── Orders.jsx      # Order history and tracking
│   │   └── AdminDashboard.jsx # Admin panel
│   ├── data/               # Sample data and constants
│   │   └── products.js     # Product data and categories
│   ├── designs/            # Design assets and documentation
│   │   └── README.md       # Design system documentation
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swiftcart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The application follows a consistent design system with:

- **Color Palette**: Blue and purple primary colors with gray scale
- **Typography**: Inter font family with multiple weights
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Category navigation
- Featured products showcase
- Company features and benefits

### Product List
- Advanced filtering by category
- Search functionality
- Sorting options (price, rating, name)
- Responsive product grid

### Product Details
- High-quality product images
- Detailed product information
- Quantity selector
- Add to cart functionality
- Product features and specifications

### Shopping Cart
- Item management (add, remove, update quantity)
- Order summary with calculations
- Shipping information
- Proceed to checkout

### Checkout
- Multi-step checkout process
- Shipping information form
- Payment method selection (Card/Cash on Delivery)
- Order review and confirmation

### User Authentication
- User registration and login
- Profile management
- Order history and tracking
- Secure authentication flow

### Admin Dashboard
- Product management (add, edit, delete)
- Order management and status updates
- Sales analytics and overview
- Inventory tracking

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products or categories:

```javascript
export const products = [
  {
    id: 1,
    name: "Product Name",
    price: 29.99,
    category: "groceries", // or "electronics", "clothing"
    image: "image-url",
    description: "Product description",
    inStock: true,
    rating: 4.5
  }
];
```

### Styling
The application uses Tailwind CSS for styling. Customize the design by:

1. Modifying `tailwind.config.js` for theme customization
2. Adding custom CSS in `src/index.css`
3. Using Tailwind utility classes in components

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS team for the utility-first CSS framework
- Unsplash for the beautiful product images
- Heroicons for the clean icon set

## 📞 Support

For support, email support@swiftcart.com or create an issue in the repository.

---

**SwiftCart** - Your one-stop destination for online shopping! 🛒