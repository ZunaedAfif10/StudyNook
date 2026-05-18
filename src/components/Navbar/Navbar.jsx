'use client'
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const user = false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 md:px-10 py-4">
      <div className="flex items-center justify-between">
        
        <div className="text-2xl font-bold">
          StudyNook
        </div>

        <ul className="hidden md:flex items-center gap-8 text-lg">
          
          <li>
            <a href="/" className="hover:text-sky-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/rooms" className="hover:text-sky-400 transition">
              Rooms
            </a>
          </li>
          {user && (
            <>
              <li>
                <a
                  href="/add-room"
                  className="hover:text-sky-400 transition"
                >
                  Add Room
                </a>
              </li>

              <li>
                <a
                  href="/my-listings"
                  className="hover:text-sky-400 transition"
                >
                  My Listings
                </a>
              </li>

              <li>
                <a
                  href="/my-bookings"
                  className="hover:text-sky-400 transition"
                >
                  My Bookings
                </a>
              </li>
            </>
          )}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          
          {user ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-sky-400"
                />
                <span className="font-medium">
                  John Doe
                </span>
              </div>

              <div className="absolute right-0 mt-3 w-52 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <a
                  href="/my-listings"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  My Listings
                </a>
                <a
                  href="/my-bookings"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  My Bookings
                </a>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button className="border border-sky-400 text-sky-400 px-4 py-2 rounded-md hover:bg-sky-400 hover:text-white transition">
                Login
              </button>
              <button className="bg-sky-400 px-4 py-2 rounded-md hover:bg-sky-500 transition">
                Register
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
          
          <a href="/" className="hover:text-sky-400 transition">
            Home
          </a>
          <a href="/rooms" className="hover:text-sky-400 transition">
            Rooms
          </a>
          {user && (
            <>
              <a
                href="/add-room"
                className="hover:text-sky-400 transition"
              >
                Add Room
              </a>

              <a
                href="/my-listings"
                className="hover:text-sky-400 transition"
              >
                My Listings
              </a>
              <a
                href="/my-bookings"
                className="hover:text-sky-400 transition"
              >
                My Bookings
              </a>
            </>
          )}

          <div className="border-t border-slate-700 pt-4">
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-sky-400"
                  />
                  <span className="font-medium">
                    John Doe
                  </span>
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <button className="border border-sky-400 text-sky-400 px-4 py-2 rounded-md hover:bg-sky-400 hover:text-white transition">
                  Login
                </button>

                <button className="bg-sky-400 px-4 py-2 rounded-md hover:bg-sky-500 transition">
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;