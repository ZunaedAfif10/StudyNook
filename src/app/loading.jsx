export default function loading() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center">

            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">

                <div className="h-16 w-16 rounded-full border-4 border-white border-t-white border-r-white animate-spin"></div>

                <p className="text-slate-300 text-xl font-medium">
                    Loading StudyNook...
                </p>

            </div>
        </div>
    );
}