import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certification from './components/Certification';
import Certificate from './components/Certificate';
import Courses from './components/Courses';
import Alumni from './components/Alumni';
import Tour from './components/Tour';
import Testimonials from './components/Testimonials';
import Whysqi from './components/Whysqi';
import Faq from './components/Faq';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Certification />
      <Certificate />
      <Courses />
      <Alumni />
      <Tour />
      <Testimonials/>
      <Whysqi />
      <Faq/>
    </>
  );
};

export default App;
