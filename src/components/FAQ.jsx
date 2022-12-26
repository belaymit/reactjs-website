import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <article className="faq" onClick={() => setIsAnswerShowing((prev) => !prev)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <button className="faq-icon" type="button">
          {isAnswerShowing ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      { isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
