export function WhyStudy() {
    return (

        <section className="py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-black text-center">
                    Why{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        StudyNook
                    </span>
                </h2>


                <p className="my-4 text-center text-gray-400 max-w-2xl mx-auto">
                    Everything you need to find, book, and manage study rooms without stress.
                </p>

                <div className="mt-12 grid gap-10 md:grid-cols-3">
                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">🔍</div>
                        <h3 className="mt-4 text-xl font-bold">Smart Room Discovery</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Find study spaces filtered by location, capacity, price, and amenities.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">⏱️</div>
                        <h3 className="mt-4 text-xl font-bold">Real-Time Availability</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            See live updates and avoid double bookings or conflicts.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl">
                        <div className="text-3xl">🔒</div>
                        <h3 className="mt-4 text-xl font-bold">Secure Booking</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Every reservation is confirmed and conflict-free.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}