import styles from './LoginButton.module.css';
import { useNavigate } from 'react-router-dom';

function Botao() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/tela-inicial');
  };

  return (
    <button className={styles['login-button']} onClick={handleRedirect}>
      ENTRAR
    </button>
  );
}

export default Botao;