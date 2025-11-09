"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white mt-10 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Camben</h2>
          <p className="text-sm text-white/80 mb-4">
            Your trusted online store. Shop smart and fast with exclusive deals
            every day.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-yellow-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Top Deals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="#" className="hover:text-yellow-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Phnom Penh, Cambodia</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+855 12 345 678</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>support@camben.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Camben. All rights reserved.
      </div>
    </footer>
  );
}
