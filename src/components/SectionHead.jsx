import React from 'react';

// eslint-disable-next-line react/prop-types
const SectionHead = ({ icon, title, className }) => (
  <div className={`section-head ${className}`}>
    <span>{icon}</span>
    <h2>{title}</h2>
  </div>
);

export default SectionHead;
