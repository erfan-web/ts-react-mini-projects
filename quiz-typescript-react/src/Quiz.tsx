import { useState } from "react";
import { questions } from "./questions";

const Quiz = () => {
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [isFinal, setIsFinal] = useState<boolean>(false);
  const handleAnswer = (option: string): void => {
    setSelectedOption(option);
    if (option == questions[currQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currQuestion < questions.length - 1) {
        setCurrQuestion((prev) => prev + 1);
      } else {
        setIsFinal(true);
      }
    }, 500);
  };
  const resetQuiz = () => {
    setIsFinal(false);
    setCurrQuestion(0);
    setScore(0);
    setSelectedOption("");
  };
  return (
    <>
      <div className="quiz-container">
        {isFinal ? (
          <div>
            <h2>Quiz completed</h2>
            <p>
              Your score is: {score} from {questions.length} questions
            </p>
            <button onClick={() => resetQuiz()}>Play Again</button>
          </div>
        ) : (
          <>
            <div className="question-box">
              <h3>{questions[currQuestion].question}</h3>
              <ul>
                {questions[currQuestion].options.map((o, i) => (
                  <li
                    className={`${
                      selectedOption === o
                        ? selectedOption == questions[currQuestion].answer
                          ? "correct"
                          : "wrong"
                        : ""
                    }`}
                    key={i}
                    onClick={() => handleAnswer(o)}
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      {!isFinal && (
        <p className="quiz-counter">
          {currQuestion + 1} / {questions.length}
        </p>
      )}
    </>
  );
};
export default Quiz;
