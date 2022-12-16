import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import '../Pages/home/home.css';

const Programs = () => (
  <section className="programs">
    <div className="container program-container">
      <SectionHead icon={<FaCrown />} title="Programs" />
      <div className="program-wrapper">
        {
          programs.map(({
            id, icon, title, info, path,
          }) => (
            <Card className="programs-program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn More
                {' '}
                <AiFillCaretRight />
                {' '}
              </Link>
            </Card>
          ))
        }
      </div>
    </div>
  </section>
);

export default Programs;
