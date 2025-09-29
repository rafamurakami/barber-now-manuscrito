class CreateBarbeiros < ActiveRecord::Migration[8.0]
  def change
    create_table :barbeiros do |t|
      t.references :usuario, null: false, foreign_key: true
      t.references :barbearia, null: false, foreign_key: true
      t.string :especializacao, limit: 100

      t.timestamps
    end
  end
end
