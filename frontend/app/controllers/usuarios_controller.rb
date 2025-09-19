# app/controllers/usuarios_controller.rb
class UsuariosController < ApplicationController
  def index
    @usuarios = Usuario.all
    render json: @usuarios
  end

  def show
    @usuario = Usuario.find(params[:id])
    render json: @usuario
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
    @usuario = Usuario.find(params[:id])
    
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
      @usuario = Usuario.find(params[:id])
      @usuario.enderecos.destroy_all if @usuario.enderecos.any?
      @usuario.destroy
      head :no_content
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Usuário não encontrado' }, status: :not_found
    rescue StandardError => e
      render json: { error: e.message }, status: :internal_server_error
    end
  end

  private

  def usuario_params
    params.require(:usuario).permit(:nome, :email)
  end
end