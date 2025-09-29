class CreateBarbearias < ActiveRecord::Migration[8.0]
  def change
    create_table :barbearias do |t|
      t.references :usuario, null: false, foreign_key: true
      t.string :nome_barbearia, limit: 100
      t.string :cep, limit: 100
      t.string :estado, limit: 100
      t.string :cidade, limit: 100
      t.string :bairro, limit: 100
      t.string :rua, limit: 100
      t.string :numero, limit: 100
      t.string :complemento, limit: 100
      t.string :referencia, limit: 100

      t.timestamps
    end
  end
end
