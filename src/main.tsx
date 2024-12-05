import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
);