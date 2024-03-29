import axios from "axios"
import { useEffect, useState } from "react"
import Periodoindividual from './periodos'
import usePeriodoSeleccionado from "../Zustand/useSelectPeriod"

function ListadoCalendario() {

    
    const [dataPeriodos, setDataPeriodos] = useState([]);
    const { setPeriodoSeleccionado} = usePeriodoSeleccionado();

    useEffect(() => {
        axios.get('http://localhost:5000/api/rutas/obtenerperiodos')
        .then(res => {
            console.log(res.data)
            setDataPeriodos(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[setDataPeriodos]);

    const seleccionarPeriodo = (periodo) => {
        setPeriodoSeleccionado(periodo);
    }

    const listadoPeriodos = dataPeriodos.map(periodo => {
        return(
            <div className="listadoperiodos">
                <Periodoindividual periodos={periodo} onClick={() => seleccionarPeriodo(periodo)}/>
            </div>
        )
    })
    return (
        <div>
            {listadoPeriodos}
        </div>
    )
}

export default ListadoCalendario