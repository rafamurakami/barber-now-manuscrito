import './ModoNoturno.css'
import { useState } from 'react'

function ModoNoturno() {
    const [modoNoturno, setModoNoturno] = useState(false)
    return(
        <div className={modoNoturno ? 'dark' : 'light'}>
            <h1>Modo Noturno</h1>
            <p>Alguma coisa bem legal está escrita aqui</p>
            <button onClick={() => setModoNoturno(!modoNoturno)}>Alternar Modo</button>
        </div>
    )
}

export default ModoNoturno