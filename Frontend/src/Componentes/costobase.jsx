import { useState } from "react";
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import './style.css'
import ListadoCalendario from "./listadocalendario";


function Costobase() {
    const [costoKwh, setCostoKwh] = useState(0);
    const [costoMensual, setCostoMensual] = useState(0);
    const [costoxKwh, setCostoxKwh] = useState(0);
    const [periodo, setPeriodo] = useState('');
    const [anio, setAnio] = useState(0);


    const calcularCostoxKwh = () => {
        const costoxKwh = costoMensual / costoKwh;
        setCostoxKwh(costoxKwh);
    }

    function agregarPeriodo() {
        var periodos = {
            periodo: periodo,
            costotalkwh: costoKwh,
            costototalmensual: costoMensual,
            costoporkwh: costoxKwh,
            anio:anio,
            idperiodo: uniquid()
        }

        axios.post('http://localhost:5000/api/rutas/agregarnuevoperiodo', periodos)
            .then(res => {
                Swal.fire('Periodo agregado correctamente')
            })
            .catch(err => { console.error(err) })
    }

    return (
        <>
        <div className="calendario-container">
            <h2>Calculadora de Consumo de Energía particular</h2>
            <div>
                <label htmlFor="period-select"> seleccione el periodo a calcular</label>
                <select id="period-select" onClick={(e) => setPeriodo(e.target.value)}>
                    <option value="">Por favor, selecciona un periodo valido</option>
                    <option value="enero/febrero">enero/febrero</option>
                    <option value="marzo/abril">marzo/abril</option>
                    <option value="mayo/junio">mayo/junio</option>
                    <option value="julio/agosto">julio/agosto</option>
                    <option value="septiembre/octubre">septiembre/octubre</option>
                    <option value="noviembre/diciembre">noviembre/diciembre</option>
                </select>
                <label> seleccione el anio</label>
                <input type="number" max="2024" maxLength="4" name="year" onChange={(e) => setAnio(e.target.value)} />
            </div>
            <div>
                <label>Consumo del período (kWh): </label>
                <input type="number" value={costoKwh} onChange={(e) => setCostoKwh(e.target.value)} />
            </div>
            <div>
                <label>total a pagar del período ($): </label>
                <input type="number" value={costoMensual} onChange={(e) => setCostoMensual(e.target.value)} />
            </div>
            <div>
                <button onClick={calcularCostoxKwh}> calcular costo por kilowat</button>
            </div>
            <div>
                {costoxKwh && <p>El valor de cada kwh es ${costoxKwh.toFixed(2)}</p>}
            </div>
            <div>
                <button onClick={agregarPeriodo}> Agregar periodo a la bd</button>
            </div>
        </div>
        </>
    )
}

export default Costobase