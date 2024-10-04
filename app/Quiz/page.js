'use client'; // Mark as client-side component

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import { FaTrophy } from 'react-icons/fa';
import quizImage from '../image/quiz.jpg'; // Ensure this path is correct
import Quiz from '../Quiz'; // Assume this component renders the actual quiz

export default function QuizSection() {
  // State to track the selected quiz and whether the quiz is started
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // Function to handle when user clicks "Join Now"
  const handleRegister = (quizId) => {
    setSelectedQuiz(quizId); // Set the selected quiz to display
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background with adjusted overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full bg-gradient-to-b from-[#0a0a0a] to-transparent opacity-40"></div>
        <div className="h-full bg-gradient-to-r from-[#b388ff] to-transparent opacity-30 transform rotate-45 translate-x-[-50%] translate-y-[25%]" style={{ backgroundSize: '200% 200%' }}></div>
      </div>

      <Navbar className="bg-[#0a0a0a] z-10" /> {/* Ensure Navbar stands out */}

      <h2 className="text-3xl font-bold mb-6 text-[#6a0dad] text-center z-10 relative">Today's Quiz</h2> {/* z-10 for visibility */}

      <div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-md mb-12 transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_4px_30px_-5px_rgba(179,136,255,0.7)] border-6 border-transparent hover:border-[#b388ff] z-10 relative"> {/* Changed border to 6px */}
        {/* Conditionally render the quiz or the card based on selectedQuiz state */}
        {selectedQuiz === "general-knowledge" ? (
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-[#6a0dad]">General Knowledge Quiz</h3>
            <Quiz />
          </div>
        ) : (
          <>
            <div className="relative">
              <Image
                src={quizImage}
                alt="Today's Quiz"
                width={400}
                height={200}
                layout="responsive"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#6a0dad]">General Knowledge Quiz</h3>
              <div className="flex items-center mb-4">
                <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-xl font-semibold text-[#6a0dad]">10 USDC</span>
                <span className="text-gray-800 ml-2">Prize Pool</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <div>
                  <p className="font-semibold">Sep 28, 2024</p>
                  <p>8:00 PM</p>
                </div>
              </div>
              <button
                className="w-full bg-[#6a0dad] text-white py-2 rounded-lg hover:bg-[#b388ff]"
                onClick={() => handleRegister("general-knowledge")}
              >
                Join Now
              </button>
            </div>
          </>
        )}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-[#6a0dad] text-center z-10 relative">Upcoming Quizzes</h2> {/* z-10 for visibility */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Upcoming Quiz Cards */}
        {["science-tech", "history", "math"].map((quizId, index) => (
          <div key={index} className="max-w-xs bg-white rounded-3xl overflow-hidden shadow-md border-6 border-transparent hover:border-[#b388ff] hover:shadow-[0_4px_30px_-5px_rgba(179,136,255,0.7)] transform hover:scale-105 transition-transform duration-300"> {/* Changed border to 6px */}
            <div className="relative">
              <Image
                src={quizImage}
                alt="Quiz Image"
                width={400}
                height={200}
                layout="responsive"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#6a0dad]">
                {quizId === "science-tech" ? "Science & Tech Quiz" : quizId === "history" ? "History Quiz" : "Math Quiz"}
              </h3>
              <div className="flex items-center mb-4">
                <FaTrophy className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-xl font-semibold text-[#6a0dad]">10 USDC</span>
                <span className="text-gray-800 ml-2">Prize Pool</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <div>
                  <p className="font-semibold">{quizId === "science-tech" ? "Oct 1, 2024" : quizId === "history" ? "Oct 5, 2024" : "Oct 10, 2024"}</p>
                  <p>{quizId === "science-tech" ? "7:00 PM" : quizId === "history" ? "6:00 PM" : "5:00 PM"}</p>
                </div>
              </div>
              <button
                className="w-full bg-[#6a0dad] text-white py-2 rounded-lg hover:bg-[#b388ff]"
                onClick={() => handleRegister(quizId)}
              >
                Register Now
              </button>
            </div>

            {selectedQuiz === quizId && (
              <div className="mt-4 p-4">
                <Quiz />
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-[#6a0dad] text-center z-10 relative">Create a Quiz</h2> {/* z-10 for visibility */}
      <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border-6 border-transparent hover:border-[#b388ff]"> {/* Changed border to 6px */}
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

          <button className="w-full bg-[#6a0dad] text-white py-2 rounded-lg hover:bg-[#b388ff]">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
