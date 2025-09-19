class EnderecosController < ApplicationController
  def index
    @enderecos = Endereco.all
    render json: @enderecos
  end
end
