'use client'
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const { data: session } = authClient.useSession()
    // console.log(session.user);

    const user = session?.user;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white px-6 md:px-10 py-4">
            <div className="flex items-center container mx-auto justify-between">

                <div className="text-2xl font-bold">
                    StudyNook
                </div>

                <ul className="hidden md:flex items-center gap-8 text-lg">

                    <li>
                        <Link href="/" className="hover:text-sky-400 transition">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/allrooms" className="hover:text-sky-400 transition">
                            Rooms
                        </Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link
                                    href="/addroom"
                                    className="hover:text-sky-400 transition"
                                >
                                    Add Room
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-listings"
                                    className="hover:text-sky-400 transition"
                                >
                                    My Listings
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-bookings"
                                    className="hover:text-sky-400 transition"
                                >
                                    My Bookings
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                <div className="hidden md:flex items-center gap-4">

                    {user ? (

                        <div className="flex items-center gap-2 cursor-pointer">
                            <img
                                src={user?.image}
                                alt="profile"
                                className="w-10 h-10 rounded-full border-2 border-sky-400"
                            />
                            <span className="font-medium whitespace-nowrap">
                                {user?.name}
                            </span>
                            <button
                                className="w-full rounded-xl border text-red-500 border-white/10 bg-white/5 px-3 py-2 font-semibold backdrop-blur-lg transition hover:bg-white/10"
                                onClick={async () => {await authClient.signOut()
                                }}
                            >
                                Logout
                            </button>
                        </div>

                    ) : (
                        <>
                            <Link href='/login'>
                                <button className="border border-sky-400 text-sky-400 px-4 py-2 rounded-md hover:bg-[#232F72] hover:text-white transition">
                                    Login
                                </button>
                            </Link>

                            <Link href='/register'>
                                <button className="bg-sky-600 px-4 py-2 rounded-md hover:bg-[#232F72] transition">
                                    Register
                                </button>
                            </Link>
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
                    <a href="/allrooms" className="hover:text-sky-400 transition">
                        Rooms
                    </a>
                    {user && (
                        <>
                            <Link
                                href="/addroom"
                                className="hover:text-sky-400 transition"
                            >
                                Add Room
                            </Link>

                            <Link
                                href="/my-listings"
                                className="hover:text-sky-400 transition"
                            >
                                My Listings
                            </Link>
                            <Link
                                href="/my-bookings"
                                className="hover:text-sky-400 transition"
                            >
                                My Bookings
                            </Link>
                        </>
                    )}

                    <div className="border-t border-slate-700 pt-4">
                        {user ? (
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={user?.image}
                                        alt="profile"
                                        className="w-10 h-10 rounded-full border-2 border-sky-400"
                                    />
                                    <span className="font-medium">
                                        {user?.name}
                                    </span>
                                </div>
                                <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition" onClick={async () => {
                                    await authClient.signOut()
                                }
                                }>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <Link href='/login'>
                                    <button className="border border-sky-600 text-sky-400 px-4 py-2 rounded-md hover:bg-[#232F72] hover:text-white transition">
                                        Login
                                    </button>
                                </Link>

                                <Link href='/register'>
                                    <button className="bg-sky-600 px-4 py-2 rounded-md hover:bg-[#232F72] transition">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;