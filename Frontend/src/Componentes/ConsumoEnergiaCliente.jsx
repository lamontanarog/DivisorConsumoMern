import { useState, useEffect } from 'react';
import ListadoCalendario from './listadocalendario';

import usePeriodoSeleccionado from '../Zustand/useSelectPeriod';

function ConsumoEnergiaCliente() {
    
    const [consumoCliente, setConsumoCliente] = useState('');
    const [pagoCliente, setPagoCliente] = useState('');

    const {periodoSeleccionado} = usePeriodoSeleccionado();
    

    const calcularPagoCliente = () => {
        if (periodoSeleccionado) {
            const pagoCliente = consumoCliente * periodoSeleccionado.costoPorKwh;
            setPagoCliente(pagoCliente);
        } else {
            alert('Por favor, selecciona un periodo.')
        }
    }

    return (
        <>
        <div>
            <h1>Periodos de energia</h1>
            <ListadoCalendario/>
        </div>
            <h2>Calculadora de Consumo de Energía particular</h2>
            <div>
                <label htmlFor="">Month to pay</label>
                <input type="text" disabled value={periodoSeleccionado ? periodoSeleccionado.periodo : ''} name="" id="" />
            </div>
            <div>
                <label>Consumo del período (kWh): </label>
                <input type="number" disabled value={consumoCliente} onChange={(e) => setConsumoCliente(e.target.value)} />
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
