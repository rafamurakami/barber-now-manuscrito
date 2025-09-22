import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Agenda from '../components/Agenda/Agenda';
import Perfil from '../components/Perfil';
import Produtos from '../components/Produtos';
import Container from '../components/Container';

function TelaInicial() {
  return (
    <div className="tela-inicial-wrapper"> 
      <Header />
      <main>
        <Container>
          <div>
            <h1>Bem-vindo de volta, Rafael!</h1>
          </div>
        </Container>

        <Perfil nome="Rafael" idade="28" perfil="Administrador" />
        <div>
          <Produtos nome="Combo: Corte+Barba" preco={55.00} emEstoque={true} />
          <Produtos nome="Minoxidil" preco={35.00} emEstoque={false} />
        </div>
        <Agenda />
      </main>
    </div>
  );
}

export default TelaInicial;