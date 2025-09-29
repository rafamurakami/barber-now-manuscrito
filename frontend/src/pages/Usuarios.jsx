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
      console.log('📊 Dados recebidos:', data); // Debug para ver todos os campos
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

  // Função para formatar telefone
  const formatarTelefone = (telefone) => {
    if (!telefone) return 'Não informado';
    return telefone;
  };

  // Função para formatar CPF
  const formatarCPF = (cpf) => {
    if (!cpf) return 'Não informado';
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
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
                <div className="usuario-header">
                  <span className="usuario-nome">
                    {usuario.nome} {usuario.sobrenome}
                  </span>
                  <span className="usuario-usuario">@{usuario.usuario}</span>
                </div>
                
                <div className="usuario-detalhes">
                  <div className="detalhe-item">
                    <strong>Email:</strong> {usuario.email}
                  </div>
                  
                  <div className="detalhe-item">
                    <strong>Telefone:</strong> {formatarTelefone(usuario.telefone)}
                  </div>
                  
                  <div className="detalhe-item">
                    <strong>CPF:</strong> {formatarCPF(usuario.cpf)}
                  </div>
                  
                  <div className="detalhe-item">
                    <strong>Gênero:</strong> {usuario.genero || 'Não informado'}
                  </div>
                  
                  <div className="detalhe-item">
                    <strong>Nascimento:</strong> {usuario.nascimento || 'Não informado'}
                  </div>
                  
                  <div className="detalhe-item">
                    <strong>Endereço:</strong> 
                    {usuario.rua ? ` ${usuario.rua}, ${usuario.numero || 'S/N'}` : ' Não informado'}
                    {usuario.bairro && ` - ${usuario.bairro}`}
                    {usuario.cidade && `, ${usuario.cidade}`}
                    {usuario.estado && `/${usuario.estado}`}
                    {usuario.cep && ` - CEP: ${usuario.cep}`}
                  </div>
                  
                  {usuario.complemento && (
                    <div className="detalhe-item">
                      <strong>Complemento:</strong> {usuario.complemento}
                    </div>
                  )}
                </div>
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