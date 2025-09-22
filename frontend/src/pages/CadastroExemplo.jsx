import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroExemplo.css';

const EditarUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });
  const [carregando, setCarregando] = useState(true);
  const [modoEdicao, setModoEdicao] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Verifica se é edição (tem ID) ou criação (ID é 'novo' ou undefined)
    if (id && id !== 'novo' && id !== 'undefined') {
      setModoEdicao(true);
      carregarUsuario();
    } else {
      // Modo criação - não precisa carregar dados
      setCarregando(false);
      setModoEdicao(false);
    }
  }, [id]);

  const carregarUsuario = async () => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`);
      
      if (!response.ok) {
        throw new Error('Erro ao carregar usuário');
      }
      
      const usuario = await response.json();
      setFormData({
        nome: usuario.nome,
        email: usuario.email
      });
      setCarregando(false);
      
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar usuário');
      navigate('/usuarios');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let url, method;
      
      if (modoEdicao) {
        // Modo EDIÇÃO - PUT
        url = `http://localhost:3000/usuarios/${id}`;
        method = 'PUT';
      } else {
        // Modo CRIAÇÃO - POST
        url = 'http://localhost:3000/usuarios';
        method = 'POST';
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: formData })
      });

      if (!response.ok) {
        throw new Error(`Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário`);
      }

      alert(`Usuário ${modoEdicao ? 'atualizado' : 'criado'} com sucesso!`);
      navigate('/usuarios');
      
    } catch (error) {
      console.error(`Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário:`, error);
      alert(`Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário`);
    }
  };

  if (carregando && modoEdicao) {
    return <div className="cadastro-container">Carregando...</div>;
  }

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>{modoEdicao ? 'Editar Usuário' : 'Criar Novo Usuário'}</h2>
        
        <div className="form-group">
          <label htmlFor="nome">NOME</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn">
            {modoEdicao ? 'Atualizar' : 'Criar'}
          </button>
          
          <button 
            type="button" 
            className="btn"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditarUsuario;