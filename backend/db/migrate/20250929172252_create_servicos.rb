class CreateServicos < ActiveRecord::Migration[8.0]
  def change
    create_table :servicos do |t|
      t.references :barbearia, null: false, foreign_key: true
      t.string :servico, limit: 100
      t.string :preco, limit: 100

      t.timestamps
    end
  end
end
