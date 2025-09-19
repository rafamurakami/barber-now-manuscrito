import './Produtos.css'

function Produtos ({nome, preco, emEstoque}) {
    return <h3 className='produto-texto '>{nome} = R${preco}, {emEstoque ? "Disponível" : "Indisponível"}</h3>
}

export default Produtos