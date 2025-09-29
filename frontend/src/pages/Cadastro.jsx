import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    genero: '',
    nascimento: '',
    cpf: '',
    telefone: '',
    email: '',
    usuario: '',
    senha: '',
    cep: '',
    bairro: '',
    rua: '',
    estado: '',
    cidade: '',
    numero: '',
    complemento: ''
  });
  
  const [carregando, setCarregando] = useState(true);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {    
    if (id) {
      setModoEdicao(true);
      carregarUsuario();
    } else {
      setCarregando(false);
      setModoEdicao(false);
    }
  }, [id]);

  const carregarUsuario = async () => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`);
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const usuario = await response.json();
      
      setFormData({
        nome: usuario.nome || '',
        sobrenome: usuario.sobrenome || '',
        genero: usuario.genero || '',
        nascimento: usuario.nascimento || '',
        cpf: usuario.cpf || '',
        telefone: usuario.telefone || '',
        email: usuario.email || '',
        usuario: usuario.usuario || '',
        senha: '',
        cep: usuario.cep || '',
        bairro: usuario.bairro || '',
        rua: usuario.rua || '',
        estado: usuario.estado || '',
        cidade: usuario.cidade || '',
        numero: usuario.numero || '',
        complemento: usuario.complemento || ''
      });
      
      setCarregando(false);
      setErro('');
      
    } catch (error) {
      console.error('❌ Erro ao carregar dados:', error);
      setErro('Erro ao carregar usuário: ' + error.message);
      setCarregando(false);
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
    setErro('');
    
    if (!formData.nome || !formData.email || !formData.usuario) {
      setErro('Por favor, preencha os campos obrigatórios: Nome, Email e Usuário');
      return;
    }

    if (!modoEdicao && !formData.senha) {
      setErro('Por favor, informe uma senha');
      return;
    }

    try {
      let url, method;
      
      if (modoEdicao) {
        url = `http://localhost:3000/usuarios/${id}`;
        method = 'PUT';
      } else {
        url = 'http://localhost:3000/usuarios';
        method = 'POST';
      }

      const dadosEnvio = {
        nome: formData.nome,
        sobrenome: formData.sobrenome,
        genero: formData.genero,
        nascimento: formData.nascimento,
        cpf: formData.cpf,
        telefone: formData.telefone,
        email: formData.email,
        usuario: formData.usuario,
        cep: formData.cep,
        bairro: formData.bairro,
        rua: formData.rua,
        estado: formData.estado,
        cidade: formData.cidade,
        numero: formData.numero,
        complemento: formData.complemento
      };

      if (!modoEdicao || formData.senha) {
        dadosEnvio.senha = formData.senha;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: dadosEnvio })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors || `Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário`);
      }

      const responseData = await response.json();

      alert(`Usuário ${modoEdicao ? 'atualizado' : 'criado'} com sucesso!`);
      navigate('/usuarios');
      
    } catch (error) {
      console.error(`❌ Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário:`, error);
      setErro(error.message || `Erro ao ${modoEdicao ? 'atualizar' : 'criar'} usuário`);
    }
  };

  if (carregando && modoEdicao) {
    return (
      <div className="cadastro-container">
        <div className="loading">Carregando usuário...</div>
        {erro && <div className="error-message">{erro}</div>}
      </div>
    );
  }

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>{modoEdicao ? 'Editar Usuário' : 'Criar Novo Usuário'}</h2>
        
        {erro && <div className="error-message">{erro}</div>}
        
        {modoEdicao && (
          <div className="editing-info">
            Editando usuário ID: {id}
          </div>
        )}

        {/* SEÇÃO 1: DADOS PESSOAIS */}
        <div className="form-section">
          <h3>Dados Pessoais</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">NOME *</label>
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
              <label htmlFor="sobrenome">SOBRENOME</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                maxLength="14"
                placeholder="000.000.000-00"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nascimento">NASCIMENTO</label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="genero">SEXO</label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
              >
                <option value="">Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="telefone">TELEFONE</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: DADOS DE ACESSO */}
        <div className="form-section">
          <h3>Dados de Acesso</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="usuario">USUÁRIO *</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="senha">SENHA {!modoEdicao && '*'}</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder={modoEdicao ? "Deixe em branco para manter a senha atual" : ""}
                required={!modoEdicao}
              />
            </div>
            <div className="form-group"></div>
          </div>
        </div>

        {/* SEÇÃO 3: ENDEREÇO */}
        <div className="form-section">
          <h3>Endereço</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                placeholder="00000-000"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rua">RUA</label>
              <input
                type="text"
                id="rua"
                name="rua"
                value={formData.rua}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="numero">NÚMERO</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="complemento">COMPLEMENTO</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bairro">BAIRRO</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidade">CIDADE</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="estado">ESTADO</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                placeholder="Ex: SP, RJ, MG..."
              />
            </div>
            <div className="form-group"></div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit" className="btn">
            {modoEdicao ? 'Atualizar' : 'Cadastrar'}
          </button>
          
          <button 
            type="button" 
            className="btn"
            onClick={() => navigate('/usuarios')}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;