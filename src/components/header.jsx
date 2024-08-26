import React, { useState } from "react";
import { FaBars, FaPhoneVolume, FaRegComment } from "react-icons/fa";
import logo from '../assets/site-logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-[999]">
      <nav className="fixed top-0 left-0 right-0 bg-white py-4">
        <div className="container flex items-center justify-between mx-auto px-4 md:px-10">
          <div className="header-logo mr-16">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Toggle Button for Small Screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black text-2xl"
          >
            {isMenuOpen ? <FaBars /> : <FaBars />} {/* Use FaBars for both open and close */}
          </button>

          {/* Navbar Menu for Large Screens */}
          <div className={`lg:flex ${isMenuOpen ? "hidden" : ""}`}>
            <ul className="hidden lg:flex items-center space-x-8 uppercase font-medium">
              <li className="py-2 lg:py-0">
                <Link to="/" className="text-black hover:text-blue-500" onClick={handleMenuItemClick}>Home</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/Services" className="text-black hover:text-blue-500" onClick={handleMenuItemClick}>Services</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/Portfolio" className="text-black hover:text-blue-500" onClick={handleMenuItemClick}>Portfolio</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/Our-Team" className="text-black hover:text-blue-500" onClick={handleMenuItemClick}>Our Team</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link to="/Contact-Us" className="text-black hover:text-blue-500" onClick={handleMenuItemClick}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Navbar Menu for Small Screens */}
          <div
            className={`${
              isMenuOpen
                ? "fixed top-0 left-0 w-full max-h-[400px] bg-white z-50 flex flex-col items-center space-y-6 text-sm uppercase font-semibold transition-transform transform translate-y-0"
                : "fixed top-0 left-0 w-full max-h-[400px] bg-white z-50 flex flex-col items-center space-y-6 text-sm uppercase font-semibold transition-transform transform translate-y-[-100%]"
            }`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-black text-2xl"
            >
              <FaBars /> {/* Use FaBars to close the menu */}
            </button>
            <ul className="flex flex-col pt-20 items-center space-y-6">
              <li className="py-2">
                <Link to="/" className="text-black hover:text-blue-500 hover:underline" onClick={handleMenuItemClick}>Home</Link>
              </li>
              <li className="py-2">
                <Link to="/Services" className="text-black hover:text-blue-500 hover:underline" onClick={handleMenuItemClick}>Services</Link>
              </li>
              <li className="py-2">
                <Link to="/Portfolio" className="text-black hover:text-blue-500 hover:underline" onClick={handleMenuItemClick}>Portfolio</Link>
              </li>
              <li className="py-2">
                <Link to="/Our-Team" className="text-black hover:text-blue-500 hover:underline" onClick={handleMenuItemClick}>Our Team</Link>
              </li>
              <li className="py-2">
                <Link to="/Contact-Us" className="text-black hover:text-blue-500 hover:underline" onClick={handleMenuItemClick}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info for Large Screens */}
          <ul className="hidden lg:flex items-center space-x-6 ml-auto text-medium text-sm font-semibold">
            <li className="text-blue-600">
              <a href="tel:+923001055546">+92 (0300) 1055546</a>
            </li>
            <li>
              <FaPhoneVolume className="h-4 w-4 text-blue-600" />
            </li>
            <li>
              <FaRegComment className="h-4 w-4 text-blue-600" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
