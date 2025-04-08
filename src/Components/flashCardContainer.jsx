import { useState } from "react";
import { flashcards } from "../data/data";
import { FlashCard } from "./flashCard";
import { ProgressBar } from "./progressBar";

export function FlashCardContainer() {
  const [index, setIndex] = useState(0);         // which card
  const [isFlipped, setIsFlipped] = useState(false); // show answer or not

  const nextCard = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
      setIsFlipped(false);  // reset to question
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="container">
      <h1>JS Riddle Flashcards</h1>

      <ProgressBar current={index + 1} total={flashcards.length} />

      <FlashCard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
        isFlipped={isFlipped}
      />

      <div className="btns">
        <button onClick={prevCard} disabled={index === 0}>‹ Previous</button>
        <button onClick={() => setIsFlipped(!isFlipped)}>
          {isFlipped ? "Hide Answer" : "Show Answer"}
        </button>
        <button onClick={nextCard} disabled={index === flashcards.length - 1}>Next ›</button>
      </div>
    </div>
  );
}
