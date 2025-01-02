"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/valcheq_logo.png"
            alt="Valcheq Technologies Logo"
            width={1918}
            height={314}
            className="h-8 w-auto"
          />
        </Link>

        {/* Sidebar Toggle Button for Small Screens */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500"
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/#services" className="hover:text-blue-200 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/#contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed inset-0 bg-blue-700 bg-opacity-95 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo in Sidebar */}
          <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center">
            <Image
              src="/images/valcheq_logo.png"
              alt="Valcheq Technologies Logo"
              width={1918}
              height={314}
              className="h-8 w-auto"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-white p-2 rounded-md hover:bg-blue-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="mt-4">
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <Link
                href="/#services"
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
