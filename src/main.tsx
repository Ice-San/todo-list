import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './pages/homepage/Header';
import { Hero } from './pages/homepage/Hero/';
import { Signin } from "./pages/signin";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={
                <>
                    <Header />
                    <Hero />
                </>
            } />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
  </StrictMode>,
);