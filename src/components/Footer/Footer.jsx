import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 mt-10">

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white font-heading">
                        StudyNook
                    </h2>
                    <p className="mt-3 text-slate-400">
                        A modern platform to manage and explore study spaces easily.
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Useful Links
                    </h3>

                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/rooms" className="hover:text-white transition">
                                Rooms
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-white transition">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact
                    </h3>

                    <p className="text-slate-400">Email: support@studynook.com</p>
                    <p className="text-slate-400">Phone: +880 1XXXXXXXXX</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-sky-400 transition">
                            <FaFacebookF size={20} />
                        </a>

                        <a href="#" className="hover:text-sky-400 transition">
                            <FaXTwitter size={20} />
                        </a>

                        <a href="#" className="hover:text-sky-400 transition">
                            <FaLinkedinIn size={20} />
                        </a>

                        <a href="#" className="hover:text-sky-400 transition">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 py-4 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} StudyNook. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;