import React from 'react';
import Navbar from '../components/navbar';

export default function QuizSection() {
  return (
    <div className="relative min-h-screen bg-black ">
      <Navbar />

      {/* <h2 className="text-3xl font-bold mb-6 text-white">Today's Quiz</h2>
      
      <div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-md mb-12">
        <div className="relative">
          <Image
            src={Quiz}
            alt="Today's Quiz"
            width={400}
            height={200}
            layout="responsive"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-[#6b00b6]">General Knowledge Quiz</h3>
          <div className="flex items-center mb-4">
            <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
            <span className="text-xl font-semibold text-[#6b00b6]">10 USDC</span>
            <span className="text-gray-500 ml-2">Prize Pool</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-4">
            <div>
              <p className="font-semibold">Sep 28, 2024</p>
              <p>8:00 PM</p>
            </div>
          </div>
          <button className="w-full bg-[#6b00b6] text-white py-2 rounded-lg hover:bg-[#a29bfe]">
            Register Now
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-white">Upcoming Quizzes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="max-w-xs bg-white rounded-3xl overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={Quiz}
              alt="Upcoming Quiz 1"
              width={400}
              height={200}
              layout="responsive"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-[#6b00b6]">Science & Tech Quiz</h3>
            <div className="flex items-center mb-4">
              <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-xl font-semibold text-[#6b00b6]">10 USDC</span>
              <span className="text-gray-500 ml-2">Prize Pool</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <div>
                <p className="font-semibold">Oct 1, 2024</p>
                <p>7:00 PM</p>
              </div>
            </div>
            <button className="w-full bg-[#6b00b6] text-white py-2 rounded-lg hover:bg-[#a29bfe]">
              Register Now
            </button>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-3xl overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={Quiz}
              alt="Upcoming Quiz 2"
              width={400}
              height={200}
              layout="responsive"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-[#6b00b6]">History Quiz</h3>
            <div className="flex items-center mb-4">
              <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-xl font-semibold text-[#6b00b6]">10 USDC</span>
              <span className="text-gray-500 ml-2">Prize Pool</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <div>
                <p className="font-semibold">Oct 5, 2024</p>
                <p>6:00 PM</p>
              </div>
            </div>
            <button className="w-full bg-[#6b00b6] text-white py-2 rounded-lg hover:bg-[#a29bfe]">
              Register Now
            </button>
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-3xl overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={Quiz}
              alt="Upcoming Quiz 3"
              width={400}
              height={200}
              layout="responsive"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-[#6b00b6]">Photography Quiz</h3>
            <div className="flex items-center mb-4">
              <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-xl font-semibold text-[#6b00b6]">10 USDC</span>
              <span className="text-gray-500 ml-2">Prize Pool</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <div>
                <p className="font-semibold">Oct 10, 2024</p>
                <p>5:00 PM</p>
              </div>
            </div>
            <button className="w-full bg-[#6b00b6] text-white py-2 rounded-lg hover:bg-[#a29bfe]">
              Register Now
            </button>
          </div>
        </div>
      </div> */}

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Create a Quiz</h2>
      <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-md p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz-title">
              Quiz Title
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="quiz-title"
              type="text"
              placeholder="Enter quiz title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz-date">
              Date
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="quiz-date"
              type="date"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz-time">
              Time
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="quiz-time"
              type="time"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz-prize">
              Prize
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="quiz-prize"
              type="text"
              placeholder="Enter prize (e.g., 10 USDC)"
            />
          </div>

          <button className="w-full bg-[#6b00b6] text-white py-2 rounded-lg hover:bg-[#a29bfe]">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
