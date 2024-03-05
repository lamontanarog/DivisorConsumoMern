import './style.css'
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
        </ul>
      </div>
    </div>
  )
}

export default Periodoindividual