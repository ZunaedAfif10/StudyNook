"use client";

import Link from "next/link";
import { IoWarningSharp } from "react-icons/io5";

export default function error() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">

            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-red-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="relative z-10 text-center max-w-xl">

                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="text-3xl"><IoWarningSharp size='lg' /></span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                    Something Went Wrong
                </h1>

                <p className="mt-2 text-white text-2xl font-bold">
                    We encountered an unexpected error while processing your request.
                    Please try again.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        href="/"
                        className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold hover:border-purple-500 hover:bg-slate-800 transition"
                    >
                        Go Home
                    </Link>

                </div>
            </div>
        </div>
    );
}