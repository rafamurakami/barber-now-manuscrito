import React from 'react';
// 1. Importe o hook useNavigate
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span className={styles.config}>Configuração</span>
        <span className={styles.profile}>Perfil: ADM ?</span>
      </div>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li><a href="#historico">Histórico</a></li>
          <li><a href="#listas">Listas</a></li>
          <li><a href="#promocoes">Promoções</a></li>
          <li><a href="#avaliacoes">Avaliações</a></li>
        </ul>
        <button onClick={handleLogout} className={styles.logout}>
          <b>Sair</b>
        </button>
      </nav>
    </header>
  );
};

export default Header;