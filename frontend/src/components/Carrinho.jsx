import { useState } from "react";

function Carrinho() {
    const [itens, setItens] = useState([]);

    function adicionarItem() {
        const novoItem = {id: Date.now(), nome: `Produto #${itens.length + 1}`};
        setItens([...itens, novoItem]);
    }

    return (<div>
        <h2>Carrinho ({itens.length} itens)</h2>
        <button onClick={adicionarItem}>Adicionar Item</button>
    </div>
    );
}

export default Carrinho