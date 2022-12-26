import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const FAQ = ({ question, answer }) => (
  <article>
    <div className="faq-question">
      <h4>{question}</h4>
      <button className="faq-icon" type="button">
        <AiOutlinePlus />
      </button>
    </div>
    <p>{answer}</p>
  </article>
);

export default FAQ;
