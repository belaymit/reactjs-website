import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { faqs } from '../data';
import FAQ from './FAQ';

const FAQs = () => (
  <section className="faqs">
    <div className="container faqs-container">
      <SectionHead icon={<FaQuestion />} title="FAQs" />
      <div className="faqs-wrapper">
        {
          // eslint-disable-next-line max-len
          faqs.map(({ id, question, answer }) => <FAQ key={id} question={question} answer={answer} />)
        }
      </div>
    </div>
  </section>
);

export default FAQs;
