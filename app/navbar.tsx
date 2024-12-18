"use client";
import React, { useState } from 'react';
import logo from '../public/images/bg1.svg';
import MyComponent from './images';


const images = [

  { src: logo, alt: 'Description of image 2', width: 60, height: 60 },
];


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
  
    return (
      <nav className="relative border-gray-200 dark:bg-gray-800 dark:border-gray-700">

        <div className="max-w-screen-2xl flex flex-wrap justify-between mx-8">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
       
            <MyComponent image={images[0]} />
  
          </a>
  
  
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 ml-6 mt-3 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
  
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 bg-bgGray shadow-2xl z-50 rounded-md`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange1 dark:bg-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange1 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange1 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange1 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

  
        </div>
      </nav>
    );

}