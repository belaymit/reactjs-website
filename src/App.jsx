import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contacts />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="plans" element={<Plans />} />
      <Route path="trainers" element={<Trainers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
