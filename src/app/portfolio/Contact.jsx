import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 10) + 1;
    const ops = ['+', '-', '*'];
    const op1 = ops[Math.floor(Math.random() * ops.length)];
    const op2 = ops[Math.floor(Math.random() * ops.length)];
    const expr = `${a} ${op1} ${b} ${op2} ${c}`;
    const answer = eval(expr);
    setQuestion(expr);
    setCorrectAnswer(answer.toString());
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim() === correctAnswer) {
      setIsVerified(true);
      setError('');
    } else {
      setError('❌ Oops! That’s incorrect. Try again.');
      setUserAnswer('');
      generateQuestion();
    }
  };

  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7fff7" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,202.7C480,203,600,149,720,149.3C840,149,960,203,1080,208C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
      <div className="min-h-screen bg-[#e7fff7] flex flex-col md:flex-row items-center justify-center lg:px-75 px-4 py-10 md:py-12 font-sans md:gap-0">
        {/* Floating Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="./images/contactimg.png"
            alt="Illustration"
            className="w-[70%] lg:w-[94%] max-w-xs sm:max-w-sm md:max-w-md animate-float"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">📬 Get In Touch</h2>
          {!isVerified ? (
            <>
              <p className="text-base sm:text-lg text-gray-700 mb-3">
                🧠 Solve this challenge to unlock my email:
              </p>
              <p className="text-xl font-semibold bg-yellow-100 text-yellow-900 px-5 py-2 rounded-full inline-block mb-4 shadow">
                {question} = ❓
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  placeholder="🤔 Your Answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full max-w-sm px-4 py-2 rounded-full border border-blue-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
                >
                  Verify
                </button>
              </form>
            </>
          ) : (
            <div className="mt-6">
              <p className="text-green-600 font-bold text-xl mb-2">🎉 You're verified!</p>
              <p className="text-gray-700">📧 You can contact us at:</p>
              <p className="text-blue-700 text-2xl font-mono mt-3 select-all">
                @example.com
              </p>
            </div>
          )}
        </div>

        {/* Floating Animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}
