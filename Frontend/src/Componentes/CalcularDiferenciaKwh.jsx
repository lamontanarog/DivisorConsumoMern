import { useState } from "react"

function CalcularDiferenciaKwh() {
    const [ValorKwhAnterior, setValorKwhAnterior] = useState(0);
    const [ValorKwhActual, setValorKwhActual] = useState(0);
    const [ValorKwhNuevo, setValorKwhNuevo] = useState(0);

    function CalcularDiferenciaConsumo() {
        const diferencia =  ValorKwhNuevo - ValorKwhAnterior ;
        setValorKwhActual(diferencia)
    }
    return (
        <div>
            <label>Kwh Consumidos en el periodo anterior</label>
            <input disabled type="Number" step="any" value={ValorKwhAnterior} />
            <label>Kwh Consumidos en el periodo actual</label>
            <input style={{color:'white'}} type="Number" min="1" max="1000" value={ValorKwhNuevo} onChange={(e) => { setValorKwhNuevo(e.target.value) }} />
            <button onClick={CalcularDiferenciaConsumo}>Calcular diferencia</button>
            <label htmlFor="">Diferencia entre consumos</label>
            <input disabled type="Number" step="any" value={ValorKwhActual} />

        </div>
    )
}

export default CalcularDiferenciaKwh