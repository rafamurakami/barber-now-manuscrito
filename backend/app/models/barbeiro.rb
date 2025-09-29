class Barbeiro < ApplicationRecord
  belongs_to :usuario
  belongs_to :barbearia
  
  validates :especializacao, presence: true
end