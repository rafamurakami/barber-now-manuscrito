class Agenda < ApplicationRecord
  belongs_to :barbearia
  belongs_to :usuario
  
  validates :data, presence: true
end