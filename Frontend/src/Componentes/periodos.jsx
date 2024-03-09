import './style.css'
import Swal from 'sweetalert2'
function Periodoindividual({ periodos }) {
  return (
    <div>
      <div>
        <ul>
          <li>Id: {periodos._id}</li>
          <li>Periodo: {periodos.periodo}</li>
          <li>Anio: {periodos.anio}</li>
          <li>Total kwh cosumidos: {periodos.costotalkwh}</li>
          <li>Total a pagar: {periodos.costototalmensual}</li>
          <li>Valor de cada kwh: {periodos.costoporkwh}</li>
          <button onClick={()=>{
            Swal.fire('Hola')
          }}>Pagar</button>
        </ul>
      </div>
    </div>
  )
}

export default Periodoindividual