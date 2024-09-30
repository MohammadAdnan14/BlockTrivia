import React from "react";
import Navbar from "../components/navbar";
import Spline from "@splinetool/react-spline"; 

function HomePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black p-8"> 
      <Navbar />

      <div className="relative flex flex-col md:flex-row w-full max-w-6xl justify-between items-center h-full z-10">
        
        <div className="flex flex-col gap-6 max-w-md h-full justify-center md:mt-[-100px]">
          <h1 className="font-extrabold text-7xl text-[var(--primary)] dark:text-[#b388ff]">
            BlockTrivia
          </h1>
          <span className="text-2xl font-light text-gray-400 dark:text-[var(--foreground)]"> 
            "Where Knowledge Meets the Blockchain"
          </span>
          <div className="space-y-4">
            <button className="px-6 py-3 bg-[#b388ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#6a0dad] transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto h-full flex justify-end items-center mt-[150px]">
          <div className="w-full h-full max-w-[700px]">
            <Spline scene="https://prod.spline.design/64buftY0pHtSHrcH/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
