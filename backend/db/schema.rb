# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_09_29_172256) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "agendas", force: :cascade do |t|
    t.bigint "barbearia_id", null: false
    t.bigint "usuario_id", null: false
    t.date "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barbearia_id"], name: "index_agendas_on_barbearia_id"
    t.index ["usuario_id"], name: "index_agendas_on_usuario_id"
  end

  create_table "avaliacaos", force: :cascade do |t|
    t.bigint "usuario_id", null: false
    t.bigint "barbearia_id", null: false
    t.integer "avaliacao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barbearia_id"], name: "index_avaliacaos_on_barbearia_id"
    t.index ["usuario_id"], name: "index_avaliacaos_on_usuario_id"
  end

  create_table "barbearias", force: :cascade do |t|
    t.bigint "usuario_id", null: false
    t.string "nome_barbearia", limit: 100
    t.string "cep", limit: 100
    t.string "estado", limit: 100
    t.string "cidade", limit: 100
    t.string "bairro", limit: 100
    t.string "rua", limit: 100
    t.string "numero", limit: 100
    t.string "complemento", limit: 100
    t.string "referencia", limit: 100
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["usuario_id"], name: "index_barbearias_on_usuario_id"
  end

  create_table "barbeiros", force: :cascade do |t|
    t.bigint "usuario_id", null: false
    t.bigint "barbearia_id", null: false
    t.string "especializacao", limit: 100
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barbearia_id"], name: "index_barbeiros_on_barbearia_id"
    t.index ["usuario_id"], name: "index_barbeiros_on_usuario_id"
  end

  create_table "servicos", force: :cascade do |t|
    t.bigint "barbearia_id", null: false
    t.string "servico", limit: 100
    t.string "preco", limit: 100
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barbearia_id"], name: "index_servicos_on_barbearia_id"
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nome"
    t.string "sobrenome"
    t.date "nascimento"
    t.string "genero"
    t.string "cpf", limit: 11
    t.string "email", limit: 100
    t.string "senha", limit: 100
    t.string "telefone", limit: 100
    t.string "usuario", limit: 100
    t.string "cep", limit: 100
    t.string "bairro", limit: 100
    t.string "rua", limit: 100
    t.string "estado", limit: 100
    t.string "cidade", limit: 100
    t.string "numero", limit: 100
    t.string "complemento", limit: 100
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "agendas", "barbearias"
  add_foreign_key "agendas", "usuarios"
  add_foreign_key "avaliacaos", "barbearias"
  add_foreign_key "avaliacaos", "usuarios"
  add_foreign_key "barbearias", "usuarios"
  add_foreign_key "barbeiros", "barbearias"
  add_foreign_key "barbeiros", "usuarios"
  add_foreign_key "servicos", "barbearias"
end
