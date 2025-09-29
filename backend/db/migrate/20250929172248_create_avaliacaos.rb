class CreateAvaliacaos < ActiveRecord::Migration[8.0]
  def change
    create_table :avaliacaos do |t|
      t.references :usuario, null: false, foreign_key: true
      t.references :barbearia, null: false, foreign_key: true
      t.integer :avaliacao

      t.timestamps
    end
  end
end
