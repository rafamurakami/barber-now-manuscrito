class Avaliacao < ApplicationRecord
  belongs_to :usuario
  belongs_to :barbearia
  
  validates :avaliacao, numericality: { only_integer: true, greater_than: 0, less_than: 6 }
end