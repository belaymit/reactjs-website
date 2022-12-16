import React from 'react';
import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';

const Programs = () => (
  <section className="programs">
    <div className="container program-container">
      <div className="program-head">
        <SectionHead icon={<FaCrown />} title="Programs" />
      </div>
    </div>
  </section>
);

export default Programs;
