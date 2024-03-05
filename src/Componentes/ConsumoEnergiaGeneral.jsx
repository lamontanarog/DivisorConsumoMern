
import { useState } from 'react';
import Costobase from './costobase';
import ListadoCalendario from './listadocalendario';

function ConsumoEnergia() {
    
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
        <div className='card-father'>
            <Costobase/>
            {/* <Calendario/> */}
        </div>
            <div className='grid-card-periodos'>
                <h3>Desea ver los periodos guardados?</h3>
            <button onClick={toggleVisibility}>Mostrar periodos</button>
            {isVisible && <ListadoCalendario/>}
        </div>
            <div>
                <h3>Desea calcular el total del cliente?</h3>
                <a href="/consumocliente"><button>Consumo de cliente</button></a>
            </div>
        </>

    );
}

export default ConsumoEnergia;
