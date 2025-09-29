class Usuario < ApplicationRecord
  has_many :barbearias, foreign_key: 'usuario_id'
  has_many :agendas
  has_many :avaliacoes
  has_one :barbeiro
  
  validates :nome, :nascimento, :cpf, :email, :senha, :usuario, 
            :cep, :bairro, :rua, :estado, :cidade, presence: true
  validates :cpf, length: { is: 11 }
  validates :email, :usuario, uniqueness: true
end