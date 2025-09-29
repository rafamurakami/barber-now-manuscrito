class Servico < ApplicationRecord
  belongs_to :barbearia
  
  validates :servico, :preco, presence: true
end