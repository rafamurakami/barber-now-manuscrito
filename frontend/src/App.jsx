import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import TelaInicial from './pages/TelaInicial';
import Cadastro from './pages/Cadastro';
import Usuarios from './pages/Usuarios';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/tela-inicial" element={<TelaInicial />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/editar-usuario/:id" element={<Cadastro />} />
    </Routes>
  );
}

export default App;