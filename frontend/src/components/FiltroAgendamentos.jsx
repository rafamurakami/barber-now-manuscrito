import { useState } from "react";

function FiltroAgendamentos () {
    const [termoBusca, setTermoBusca] = useState('')
    return (
        <div>
            <input type="text" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} placeholder="Dia 28 de agosto"/>
            <p>A procura por: <strong>{termoBusca}</strong></p>
        </div>
    )
}

export default FiltroAgendamentos