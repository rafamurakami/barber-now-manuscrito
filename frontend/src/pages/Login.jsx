import React from 'react';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';
import Botao from '../components/LoginButton';
import '../App.css'; 
import BotaoCadastro from '../components/Cadastro/BotaoCadastro';
import BotaoUsuario from '../components/Usuarios/BotaoUsuarios';

function LoginPage() {
  return (
    <div className='login-page-wrapper'> 
      <div className='login-card'>
        <h1 className="card-title">Portal Barber Now</h1>
        <p className="card-subtitle">Seu estilo começa aqui</p>
        <EmailField />
        <PasswordField />
        <BotaoCadastro />
        <Botao />
        <BotaoUsuario />
      </div>
    </div>
  );
}

export default LoginPage;
