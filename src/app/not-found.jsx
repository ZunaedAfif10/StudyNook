import Link from "next/link";

export default function notfound() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">

            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="relative z-10 text-center max-w-2xl">

                <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="mt-6 text-3xl md:text-5xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-4 text-slate-400 text-lg md:text-xl">
                    The page you are looking for does not exist or has been moved.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link
                        href="/"
                        className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold transition hover:bg-blue-500"
                    >
                        Back Home
                    </Link>

                    <Link
                        href="/allrooms"
                        className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-lg font-semibold transition hover:border-purple-500 hover:bg-slate-800"
                    >
                        Browse Rooms
                    </Link>

                </div>

            </div>
        </div>
    );
}