import Featured from "../Featured/Featured";
import { HowWorks } from "../HowWorks/HowWorks";
import { WhyStudy } from "../WhyStudy/WhyStudy";


export default function Banner() {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">
            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:px-12">
                <div className="flex-1 text-center lg:text-left">
                    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-lg">
                        📚 Smart Study Room Booking Platform
                    </div>
                    <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                        Find & Book Your Perfect{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Study Space
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                        StudyNook helps students discover, filter, and reserve
                        private study rooms with secure booking, real-time
                        availability, and conflict-free scheduling.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <button className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold shadow-lg shadow-cyan-500/20 transition hover:scale-105">
                            Explore Rooms
                        </button>
                        <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-lg transition hover:bg-white/10">
                            List Your Room
                        </button>
                    </div>
                </div>
                <div className="relative flex-1">
                    <div className="absolute inset-0 rounded-[2rem] bg-white/5 backdrop-blur-2xl"></div>
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                        <img
                            src="/images/learning.jpg"
                            alt="Study Room"
                            className="h-full w-full rounded-[1.5rem] object-cover"
                        />
                        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
                            <p className="text-sm text-slate-300">
                                Rooms Booked Today
                            </p>
                            <h3 className="mt-1 text-3xl font-bold text-cyan-400">
                                120+
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <Featured></Featured>
            <WhyStudy></WhyStudy>
            <HowWorks></HowWorks>
        </div>
    );
}