import Welcome from "./Welcome.jsx";
import Result from "./Result.jsx";
import QuizQuestion from "./quizQuestion.jsx";
import questions from "./questions.jsx";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAnswer = (isCorrect) => {
    const newAnswers = [...answers, isCorrect ? 1 : 0];

    setAnswers(newAnswers);

    if (currentQuestion >= questions.length - 1) setshowResult(true);
    else setCurrentQuestion(currentQuestion + 1);
  };

  const startTest = () => setShowWelcome(false);

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setshowResult(false);
    setShowWelcome(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-800 to-gray-950">
      <div className="m-5 w-full max-w-xl rounded-3xl bg-white p-5 shadow-lg md:m-10 md:p-10">
        {showWelcome && <Welcome onStart={startTest} />}
        {!showWelcome && !showResult && (
          <QuizQuestion
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            onAnswer={handleAnswer}
          />
        )}
        {showResult && <Result answers={answers} restartTest={restartTest} />}
      </div>
    </div>
  );
}

export default App;
