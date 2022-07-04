import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import './App.css';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/listatema';
import ListaPostagem from './components/postagens/listapostagem/listapostagem';

function App() {
  return (
    <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App; 
