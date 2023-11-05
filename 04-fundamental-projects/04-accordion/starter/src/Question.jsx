import { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { title, info } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
