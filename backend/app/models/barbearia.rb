class Barbearia < ApplicationRecord
  belongs_to :usuario
  has_many :agendas
  has_many :avaliacoes
  has_many :servicos
  has_many :barbeiros
  
  validates :nome_barbearia, :cep, :estado, :cidade, :bairro, :rua, presence: true
end