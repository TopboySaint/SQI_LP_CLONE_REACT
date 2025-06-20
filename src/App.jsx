import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certification from './components/Certification';
import Certificate from './components/Certificate';
import Courses from './components/Courses';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Certification />
      <Certificate />
      <Courses />
    </>
  );
};

export default App;
