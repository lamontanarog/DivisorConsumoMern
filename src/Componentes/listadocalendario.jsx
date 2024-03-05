import axios from "axios"
import { useEffect, useState } from "react"
import Periodoindividual from './periodos'

function ListadoCalendario() {

    const [dataPeriodos, setDataPeriodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/rutas/obtenerperiodos')
        .then(res => {
            console.log(res.data)
            setDataPeriodos(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[setDataPeriodos]);

    const listadoPeriodos = dataPeriodos.map(periodo => {
        return(
            <div className="listadoperiodos">
                <Periodoindividual periodos={periodo}/>
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