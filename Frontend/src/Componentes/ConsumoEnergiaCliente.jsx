import { useState, useEffect } from 'react';
import ListadoCalendario from './listadocalendario';
import axios from 'axios';

function ConsumoEnergiaCliente() {
    
    const [consumoCliente, setConsumoCliente] = useState('');
    const [pagoCliente, setPagoCliente] = useState('');
    const [dataPeriodos, setDataPeriodos] = useState([])
    

    const calcularPagoCliente = () => {
        const pagoCliente = consumoCliente * costoPorKwh;
        setPagoCliente(pagoCliente);
        console.log(pagoCliente)
        
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/rutas/obtenerperiodos')
        .then(res => {
            console.log(res.data)
            setDataPeriodos(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[setDataPeriodos]);
    return (
        <>
        <div>
            <h1>Periodos de energia</h1>
            <ListadoCalendario/>
        </div>
            <h2>Calculadora de Consumo de Energía particular</h2>
            <div>
                <label htmlFor="">Month to pay</label>
                <input type="text" disabled value={dataPeriodos.periodo} name="" id="" />
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
