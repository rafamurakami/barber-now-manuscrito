import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import TelaInicial from './pages/TelaInicial';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/tela-inicial" element={<TelaInicial />} />
    </Routes>
  );
}

export default App;