# app/controllers/usuarios_controller.rb
class UsuariosController < ApplicationController
  before_action :set_usuario, only: [:show, :update, :destroy]

  def index
    @usuarios = Usuario.all
    render json: @usuarios.as_json(except: [:created_at, :updated_at])
  end

  def show
    render json: @usuario.as_json(except: [:created_at, :updated_at])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Usuário não encontrado' }, status: :not_found
  end

  def create
    @usuario = Usuario.new(usuario_params)
    
    if @usuario.save
      render json: @usuario, status: :created
    else
      render json: { errors: @usuario.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @usuario.update(usuario_params)
      render json: @usuario, status: :ok
    else
      render json: { errors: @usuario.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Usuário não encontrado' }, status: :not_found
  end
    
  def destroy
    begin
      # Remove a linha problemática que tenta destruir endereços
      # Se você tiver relacionamentos, configure no model com dependent: :destroy
      @usuario.destroy
      head :no_content
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Usuário não encontrado' }, status: :not_found
    rescue ActiveRecord::InvalidForeignKey => e
      render json: { error: 'Não é possível excluir usuário com registros relacionados' }, status: :unprocessable_entity
    rescue StandardError => e
      render json: { error: "Erro ao excluir usuário: #{e.message}" }, status: :internal_server_error
    end
  end

  private

  def set_usuario
    @usuario = Usuario.find(params[:id])
  end

  def usuario_params
    params.require(:usuario).permit(
      :nome, 
      :sobrenome, 
      :genero, 
      :nascimento, 
      :cpf, 
      :telefone, 
      :email, 
      :usuario, 
      :senha, 
      :cep, 
      :bairro, 
      :rua, 
      :estado, 
      :cidade, 
      :numero, 
      :complemento
    )
  end
end