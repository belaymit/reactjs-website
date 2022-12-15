import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Pages/home/Home';
import Contacts from './Pages/contacts/Contacts';
import About from './Pages/about/About';
import Gallery from './Pages/gallery/Gallery';
import NotFound from './Pages/notFound/NotFound';
import Plans from './Pages/plans/Plans';
import Trainers from './Pages/trainers/Trainers';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Home />
    <Contacts />
    <About />
    <Gallery />
    <NotFound />
    <Plans />
    <Trainers />
  </BrowserRouter>
);

export default App;
