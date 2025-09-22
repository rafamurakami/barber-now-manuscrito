class Usuario < ApplicationRecord
  has_many :enderecos
  validates :nome, presence: true
  validates :email, presence: true, uniqueness: true
end