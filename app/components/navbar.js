"use client"; // Indicate that this is a Client Component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../Image/logo.svg';

function Navbar() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    if (window.solana) {
      window.solana.on("connect", () => {
        const address = window.solana.publicKey.toString();
        setWalletAddress(shortenAddress(address));
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      const connectedWallet = await window.solana.connect();
      const address = connectedWallet.publicKey.toString();
      setWalletAddress(shortenAddress(address));
    } catch (err) {
      console.log(err);
    }
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 5)}...${address.slice(-4)}`; 
  };

  return (
    <nav className="w-full bg-[#0a0a0a] shadow-md top-0 left-0 right-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src={Logo} 
                alt="Logo" 
                width={220}  
                height={80}  
                className="object-contain"  
              />
            </Link>
          </div>

          {/* Navigation Links */}
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

          {/* Connect Wallet Button */}
          <div className="flex items-center space-x-10">
            <button
              onClick={connectWallet}
              className="bg-[#6a0dad] text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#b388ff]"
            >
              {walletAddress ? walletAddress : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
