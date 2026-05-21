export function HowWorks() {
    return (

        <section className="py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-black text-center">
                    How It <span>Works</span>
                </h2>

                <p className="my-4 text-center text-gray-400 max-w-2xl mx-auto">
                    Simple 3-step process to book your study space.
                </p>

                <div className="mt-12 grid gap-10 md:grid-cols-3">
                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">📍</div>
                        <h3 className="mt-4 text-xl font-bold">Search Rooms</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Browse study rooms based on location and preferences.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">🗓️</div>
                        <h3 className="mt-4 text-xl font-bold">Book Instantly</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Choose a time slot and confirm your booking in seconds.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">🎓</div>
                        <h3 className="mt-4 text-xl font-bold">Start Studying</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Walk in and start studying in a distraction-free space.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}