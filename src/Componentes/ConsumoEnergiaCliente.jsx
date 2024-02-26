import { useState } from 'react';
import { useSelector } from 'react-redux';

function ConsumoEnergiaCliente() {
    const costoPorKwh = useSelector(state => state.costoPorKwh);
    const [consumoCliente, setConsumoCliente] = useState('');
    const [pagoCliente, setPagoCliente] = useState('');

    console.log("Estado completo:", useSelector(state => state.costoPorKwh));

    const calcularPagoCliente = () => {
        console.log(costoPorKwh)
        const pagoCliente = consumoCliente * costoPorKwh;
        setPagoCliente(pagoCliente);
        console.log(pagoCliente)
        
    }

    return (
        <>
            <h2>Calculadora de Consumo de Energía particular</h2>
            <div>
                <label>Consumo del período (kWh): </label>
                <input type="number" value={consumoCliente} onChange={(e) => setConsumoCliente(e.target.value)} />
            </div>
            <div>
                <button onClick={calcularPagoCliente}> calcular pago del cliente</button>
            </div>
            <div>
                {pagoCliente && <p>El total a pagar por el cliente es ${pagoCliente.toFixed(2)}</p>}
            </div>
        </>
    );
}

export default ConsumoEnergiaCliente;
