import { useState, useEffect } from 'react';
import './Usuarios.css';
import EditarButton from '../components/EditarButton/EditarButton';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      
      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }
      
      const data = await response.json();
      setUsuarios(data);
      setCarregando(false);
      
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setErro(error.message);
      setCarregando(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar usuário');
      }

      setUsuarios(usuarios.filter(usuario => usuario.id !== id));
      alert('Usuário excluído com sucesso!');
      
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      alert('Erro ao excluir usuário');
    }
  };

  if (carregando) {
    return <div className="loading">Carregando usuários...</div>;
  }

  if (erro) {
    return <div className="error">Erro: {erro}</div>;
  }

  return (
    <div className="usuarios-container">
      <h1>Usuários Cadastrados</h1>
      
      {usuarios.length === 0 ? (
        <p className="no-users">Nenhum usuário cadastrado.</p>
      ) : (
        <div className="usuarios-list">
          {usuarios.map(usuario => (
            <div key={usuario.id} className="usuario-item">
              <div className="usuario-info">
                <span className="usuario-nome">{usuario.nome}</span>
                <span className="usuario-email">{usuario.email}</span>
              </div>
              
              <div className="usuario-actions">
                <EditarButton usuarioId={usuario.id} />
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(usuario.id)}
                  title="Excluir usuário"
                >
                  🗑️ Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Usuarios;