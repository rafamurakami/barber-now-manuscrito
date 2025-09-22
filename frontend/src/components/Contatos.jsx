import { useState } from "react";

function FormularioContato() {
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    return(
        <div>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu Nome" />
            <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Sua Mensagem"></textarea>
            <hr />
            <p><strong>Pré-vizualização:</strong></p>
            <p><strong>Nome:</strong>{nome}</p>
            <p><strong>Mensagem:</strong>{mensagem}</p>
        </div>
    );
}

export default FormularioContato