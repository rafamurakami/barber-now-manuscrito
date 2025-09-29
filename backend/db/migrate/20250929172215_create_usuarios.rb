class CreateUsuarios < ActiveRecord::Migration[8.0]
  def change
    create_table :usuarios do |t|
      t.string :nome
      t.string :sobrenome
      t.date :nascimento
      t.string :genero
      t.string :cpf, limit: 11
      t.string :email, limit: 100
      t.string :senha, limit: 100
      t.string :telefone, limit: 100
      t.string :usuario, limit: 100
      t.string :cep, limit: 100
      t.string :bairro, limit: 100
      t.string :rua, limit: 100
      t.string :estado, limit: 100
      t.string :cidade, limit: 100
      t.string :numero, limit: 100
      t.string :complemento, limit: 100

      t.timestamps
    end
  end
end
