import React, { useState } from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Card from '../UI/Card';
import SectionHead from './SectionHead';
import { testimonials } from '../data';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const {
    name, quote, job, avatar,
  } = testimonials[index];
  const previousTestimonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (
    <div className="testimonials">
      <div className="container testimonial-container">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials-head" />
        <Card className="testimonial">
          <div className="testimonial-avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial-quote">
            {`"${quote}"`}
          </p>
          <h5>{name}</h5>
          <small className="testimonial-title">{job}</small>
        </Card>
        <div className="testimonial-btn-container">
          <button type="button" className="testimonials-btn" onClick={previousTestimonialHandler}>
            <IoIosArrowDropleftCircle />
            {' '}
          </button>
          <button type="button" className="testimonials-btn" onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
            {' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
