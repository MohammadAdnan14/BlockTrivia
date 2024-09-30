import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../Image/1.png';

function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md top-0 left-0 right-0"> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          

          <div className="h-14 w-20">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={50} height={50} className="h-14 w-auto" />
            </Link>
          </div>

          
          <div className="hidden md:flex md:items-center md:space-x-12">
            <Link href="/" className="text-gray-300 hover:text-[#6a0dad] transition duration-300"> 
              Home
            </Link>
            <Link href="/AboutUs" className="text-gray-300 hover:text-[#6a0dad] transition duration-300">
              About Us
            </Link>
            <Link href="/Quiz" className="text-gray-300 hover:text-[#6a0dad] transition duration-300">
              Quiz
            </Link>
          </div>


          <div className="flex items-center space-x-10">
            <Link
              href="/login"
              className="bg-[#6a0dad] text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#b388ff]"
            >
              Connect Wallet
            </Link>
            {/* <Link
              href="/register"
              className="text-[#6a0dad] font-medium hover:underline transition duration-300"
            >
              Register
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
