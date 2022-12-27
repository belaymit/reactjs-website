import React from 'react';
import FAQs from '../../components/FAQs';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Programs from '../../components/Programs';
import Testimonial from '../../components/Testimonial';
import Values from '../../components/Values';
import './home.css';

const Home = () => (
  <>
    <Header />
    <Programs />
    <Values />
    <FAQs />
    <Testimonial />
    <Footer />
  </>

);

export default Home;
