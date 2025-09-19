import React from 'react';
import './Cadastro.css'; // Importando o arquivo CSS

function Cadastro() {
    const handleCadastro = (event) => {
        event.preventDefault();
        alert('Funcionalidade em implementação');
    };
  return (
    <div className="cadastro-container">
       <form className="cadastro-form" onSubmit={handleCadastro}>
        <div className="form-group">
          <label htmlFor="nome">NOME</label>
          <input type="text" id="nome" name="nome" />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">SOBRENOME</label>
          <input type="text" id="sobrenome" name="sobrenome" />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">SEXO</label>
          <input type="text" id="sexo" name="sexo" />
        </div>
        <div className="form-group">
          <label htmlFor="nascimento">NASCIMENTO</label>
          <input type="date" id="nascimento" name="nascimento" />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">TELEFONE</label>
          <input type="text" id="telefone" name="telefone" />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="usuario">USUÁRIO</label>
          <input type="text" id="usuario" name="usuario" />
        </div>
        <div className="form-group">
          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" name="senha" />
        </div>
        <div className="form-group"></div>
        <div className="form-group">
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" name="cep" />
        </div>
        <div className="form-group">
          <label htmlFor="bairro">BAIRRO</label>
          <input type="text" id="bairro" name="bairro" />
        </div>
        <div className="form-group">
          <label htmlFor="rua">RUA</label>
          <input type="text" id="rua" name="rua" />
        </div>
        <div className="form-group">
          <label htmlFor="estado">ESTADO</label>
          <input type="text" id="estado" name="estado" />
        </div>
        <div className="form-group">
          <label htmlFor="cidade">CIDADE</label>
          <input type="text" id="cidade" name="cidade" />
        </div>
        <div className="form-group">
          <label htmlFor="numero">NÚMERO</label>
          <input type="text" id="numero" name="numero" />
        </div>
        
        <div className="form-group"></div>
        <div className="form-group">
          <label htmlFor="complemento">COMPLEMENTO</label>
          <input type="text" id="complemento" name="complemento" />
        </div>

        <div className="button-container">
          <button type="submit" className="btn">Cadastrar</button>
          <a href="/" className="btn">Voltar</a>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;