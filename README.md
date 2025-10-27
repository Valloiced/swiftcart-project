# SwiftCart - E-Commerce React Application

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. SwiftCart is designed as a multi-category online marketplace for groceries, electronics, and clothing.

🌐 **Live Website:** [https://swiftcart-project.vercel.app/](https://swiftcart-project.vercel.app/)

## 🚀 MVP Features (In Scope)

* **User Authentication**: Registration, login, and profile management
* **Multi-Category Shopping**: Browse groceries, electronics, and clothing
* **Product Catalog**: Advanced filtering and search functionality
* **Product Details**: Comprehensive product information with image galleries
* **Shopping Cart**: Add, remove, and manage cart items
* **Checkout Process**: Multi-step checkout with shipping and payment options
* **Order Tracking**: Order history and tracking for users
* **Admin Dashboard**: Product and order management for administrators
* **Payment Options**: Cash on delivery and online payment gateway support
* **Responsive Design**: Mobile-first design that works on all devices
* **Modern UI/UX**: Clean, intuitive interface built with Tailwind CSS

## 🚫 Out of Scope (Future Phases)

* **AI-Driven Recommendations**: Personalized product suggestions
* **Loyalty Programs**: Discount vouchers and rewards systems
* **Multi-Language Support**: Internationalization features
* **Multi-Currency Support**: Multiple currency options
* **Third-Party Delivery Integration**: External delivery service APIs

## 🛠️ Tech Stack

* **Frontend**: React 18 with JSX
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM
* **Icons**: Heroicons (via SVG)
* **Development**: ESLint for code quality

## 📁 Project Structure

```
swiftcart/
├── src/
│   ├── components/          
│   ├── pages/              
│   ├── data/               
│   ├── designs/            
│   ├── App.jsx             
│   ├── main.jsx            
│   └── index.css           
├── public/                 
├── package.json            
├── vite.config.js          
├── tailwind.config.js      
└── README.md               
```

## 🚀 Getting Started

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn package manager

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

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build
* `npm run lint` - Run ESLint

## 🎨 Design System

The application follows a consistent design system with:

* **Color Palette**: Blue and purple primary colors with gray scale
* **Typography**: Inter font family with multiple weights
* **Components**: Reusable UI components with consistent styling
* **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 📱 Pages Overview

### Home Page

* Hero section with call-to-action
* Category navigation
* Featured products showcase
* Company features and benefits

### Product List

* Advanced filtering by category
* Search functionality
* Sorting options (price, rating, name)
* Responsive product grid

### Product Details

* High-quality product images
* Detailed product information
* Quantity selector
* Add to cart functionality
* Product features and specifications

### Shopping Cart

* Item management (add, remove, update quantity)
* Order summary with calculations
* Shipping information
* Proceed to checkout

### Checkout

* Multi-step checkout process
* Shipping information form
* Payment method selection (Card/Cash on Delivery)
* Order review and confirmation

### User Authentication

* User registration and login
* Profile management
* Order history and tracking
* Secure authentication flow

### Admin Dashboard

* Product management (add, edit, delete)
* Order management and status updates
* Sales analytics and overview
* Inventory tracking

## 🔧 Customization

### Adding New Products

Edit `src/data/products.js` to add new products or categories.

### Styling

The application uses Tailwind CSS for styling. Customize the design by modifying `tailwind.config.js` or `src/index.css`.

### Adding New Pages

Create a new component in `src/pages/`, add the route in `src/App.jsx`, and update navigation in `src/components/Navbar.jsx`.

## 🚀 Deployment

🌐 **Live Website:** [https://swiftcart-project.vercel.app/](https://swiftcart-project.vercel.app/)

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
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

* React team
* Vite team
* Tailwind CSS team
* Unsplash
* Heroicons

## 📞 Support

Email [support@swiftcart.com](mailto:support@swiftcart.com) or create an issue in the repository.

---

**SwiftCart** - Your one-stop destination for online shopping! 🛒
