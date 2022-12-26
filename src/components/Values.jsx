import React from 'react';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data';
import fullStackEng from '../images/full-stack-engineer.jpeg';
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import '../Pages/home/home.css';

const Values = () => (
  <section className="values">
    <div className="container values-container">
      <div className="values-left">
        <div className="values-img">
          <img src={fullStackEng} alt="full-stack-engineer" />
        </div>
      </div>
      <div className="values-right">
        <SectionHead icon={<GiCutDiamond />} title="Values" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum molestiae voluptate quos repellat tempora soluta
          tenetur vitae laudantium recusandae aperiam atque magnam
          culpa unde earum quibusdam nulla, similique ab accusantium!
        </p>
        <div className="values-wrapper">
          {
            values.map(({
              id, icon, title, desc,
            }) => (
              <Card className="values-value" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default Values;
