import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { user, logout, isAdmin } = useAuth();
    const { getItemCount } = useCart();

    const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    };

    return (
    <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-162xl:px-24">
        <div className="flex justify-between items-center py-4">
        {/* Logo */}
            <Link to="/" className="flex items-center">
                {/* Mobile Icon */}
                <img src="/designs/logo-icon.png" alt="SwiftCart Logo" className="h-8 w-10 sm:hidden"/>
                {/* Desktop Logo */}
                <img src="/designs/logo.png" alt="SwiftCart Logo" className="hidden sm:block h-9 md:h-10 lg:h-12 w-auto"/>  
            </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300"> Home </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition duration-300"> Products </Link> 
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition duration-300"> Cart </Link> 
            {user && ( <Link to="/orders" className="text-gray-700 hover:text-blue-600 transition duration-300" > Orders </Link> )}
            {isAdmin() && ( <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition duration-300" > Admin </Link> )}
        </div>

        {/* User Menu and Cart */}
        <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition duration-300" >
                <svg className="w-6 h-6" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve">
                    <g> <g> 
                    <path d="M671.504,577.829l110.485-432.609H902.86v68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829zM685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/> 
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897zM619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742S619.162,694.432,619.162,716.897z"/> 
                    </g> </g>
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"> {getItemCount()} </span>
            </Link>

            {/* User Menu */}
            {user ? ( 
                <div className="relative"> 
                    <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="hidden md:block">{user.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 024 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M199l-7 7-7-7" />
                        </svg>
                    </button>

                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsUserMenuOpen(false)}> Profile </Link>
                            <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsUserMenuOpen(false)}> Order History </Link>
                            {isAdmin() && ( <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsUserMenuOpen(false)} > Admin Dashboard </Link>)}
                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50" > Sign Out </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                    <Link to="/login" className="text-gray-700 hover:text-blue-600 transition duration-300"> Sign In </Link>
                    <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" > Sign Up </Link>
                </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 024 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M46h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
        <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}> Home </Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}> Products </Link>
                <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}> Cart </Link>
                {user && (<Link to="/orders" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)} > Orders </Link>)}
                {isAdmin() && (<Link to="/admin" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)} > Admin </Link> )}
                {!user && (
                    <> 
                        <Link to="/login" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)} > Sign In </Link>
                        <Link to="/register" className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)} > Sign Up </Link>
                    </>
                )}
            </div>
        </div>
    )}
</div>
</nav>
);
};

export default Navbar;