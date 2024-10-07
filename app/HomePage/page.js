import React from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline";
import Link from "next/link"; 

function HomePage() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center p-8 bg-[#0a0a0a]"> 
      <Navbar />
      <div className="relative flex flex-col md:flex-row w-full max-w-6xl justify-between items-center h-full z-10">
        
        <div className="flex flex-col gap-6 max-w-md h-full justify-center md:mt-[-100px]">
          <h1 className="font-extrabold text-7xl text-[var(--primary)] dark:text-[#b388ff]">
            BlockTrivia
          </h1>
          <span className="text-2xl font-light text-gray-400 dark:text-[var(--foreground)]"> 
            "Quiz, Learn, and Earn Onchain"
          </span>
          <div className="space-y-4">
            <Link href="/Quiz">
              <button className="px-6 py-3 bg-[#b388ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#6a0dad] transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto h-full flex justify-end items-center mt-[150px]">
          <div className="w-full h-full max-w-[700px]">
            <Spline scene="https://prod.spline.design/64buftY0pHtSHrcH/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <div className="h-[160px] w-full bg-gradient-to-t from-[#6a0dad] to-[#0a0a0a] opacity-80"></div>
      </div>
    </div>
  );
}

export default HomePage;
