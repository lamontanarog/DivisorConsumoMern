import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calcularCostoPorKwh } from '../Redux/acciones';

function ConsumoEnergia() {
    const [consumoPeriodo, setConsumoPeriodo] = useState('');
    const [costoFactura, setCostoFactura] = useState('');
    const [costoPorKwh, setCostoPorKwh] = useState();
    const dispatch = useDispatch();


    const calcularCostoConsumo = () => {
        const CostoPorKwh = costoFactura / consumoPeriodo;
        dispatch(calcularCostoPorKwh(consumoPeriodo,costoFactura));

        setCostoPorKwh(CostoPorKwh);

    }

    return (
        <div>
            <div>
                <h2>Calculadora de Consumo de Energía general</h2>
                <div>
                    <label>Consumo del período (kWh): </label>
                    <input type="number" value={consumoPeriodo} onChange={(e) => setConsumoPeriodo(e.target.value)} />
                </div>
                <div >
                    <label>Costo total de la factura: </label>
                    <input type="number" value={costoFactura} onChange={(e) => setCostoFactura(e.target.value)} />
                </div>
                <button onClick={calcularCostoConsumo}>Calcular costo por kWh</button>
                {costoPorKwh !== null && <p> el costo por kwh es {costoPorKwh}</p>}
            </div>
            <div>
                <h3>Desea calcular el total del cliente?</h3>
                <a href="/consumocliente"><button>Consumo de cliente</button></a>
            </div>
        </div>


    );
}

export default ConsumoEnergia;
