import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { NotFound } from './Pages/NotFound';
import { HeroSection } from './Sections/LandingSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { AboutMe } from './Sections/AboutMe';
import { MyService } from './Sections/MyService';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="*" element={<NotFound />} />
        <Route index element={<HeroSection />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contact" element={<HeroSection />} />
        <Route path="myservice" element={<MyService />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
