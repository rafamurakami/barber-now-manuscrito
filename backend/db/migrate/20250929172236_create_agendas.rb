class CreateAgendas < ActiveRecord::Migration[8.0]
  def change
    create_table :agendas do |t|
      t.references :barbearia, null: false, foreign_key: true
      t.references :usuario, null: false, foreign_key: true
      t.date :data

      t.timestamps
    end
  end
end
