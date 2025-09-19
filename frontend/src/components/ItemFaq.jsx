import { useState } from "react";

function ItemFaq() {
    const [estarAberto, setEstarAberto] = useState(false);

    return(
        <div>
            <h3>Qual filósofo fala "Penso logo existo."</h3>
            <button  onClick={() => setEstarAberto(!estarAberto)} style={{cursor : 'pointer'}}>Resposta</button>
            {estarAberto && <p>René Descartes</p>}
        </div>
    ); 
}

export default ItemFaq