import { Manrope, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const manRope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "StudyNook | Study Room Booking Platform",
  description: "StudyNook is a full-stack study room booking platform where students and library users can list, browse, search, and reserve study spaces with secure JWT authentication, time-conflict booking prevention, responsive design, and personalized booking management dashboards.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme='dark'
      lang="en"
      className={`${manRope.className} h-full antialiased`}
    >
      <body className="bg-[#F1F5F9]">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
