import { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    // Add more questions as needed
  ];

  const handleAnswerSelect = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setQuizFinished(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let points = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        points += 1;
      }
    });
    setScore(points);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      {quizFinished ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#6b00b6]">Quiz Completed!</h2>
          <p className="text-lg font-bold text-black">You scored {score} out of {questions.length} points!</p>
          <p className="text-lg mt-2 text-black">Thank you for participating!</p>
        </div>
      ) : (
        <div>
          {/* Progress */}
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-black">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-semibold text-black">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="absolute bg-[#6b00b6] h-2 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Display question */}
          <h3 className="text-xl font-bold mb-4 text-[#6b00b6]">{questions[currentQuestion].question}</h3>

          {/* Display options */}
          <div className="grid gap-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer 
                  ${answers[currentQuestion] === option ? 'border-[#6b00b6] bg-gray-100' : 'border-gray-300'}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="mr-2"
                />
                <span className="text-black">{option}</span> {/* Set option text color to black */}
              </label>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 disabled:opacity-50"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className="bg-[#6b00b6] text-white py-2 px-4 rounded-lg hover:bg-[#a29bfe]"
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
