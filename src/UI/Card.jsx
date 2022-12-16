import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ className, children }) => (
  <article className={`card ${className}`}>
    {children}
  </article>
);

export default Card;
