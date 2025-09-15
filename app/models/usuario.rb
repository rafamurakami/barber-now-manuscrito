class Usuario < ApplicationRecord
  has_many :enderecos
  has_many :post
  validates :nome, presence: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true
end